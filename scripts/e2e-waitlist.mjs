// Fills and submits the waitlist form in headless Chrome over the DevTools
// protocol, then reports whether the success state rendered.
//
// Usage: node scripts/e2e-waitlist.mjs <page-url> <email> [screenshot.png]
// Requires Chrome started with --remote-debugging-port=9333.
import { writeFileSync } from "node:fs";

const [url, email, out] = process.argv.slice(2);
if (!url || !email) {
  console.error("usage: e2e-waitlist.mjs <url> <email> [screenshot.png]");
  process.exit(2);
}

const targets = await (await fetch("http://127.0.0.1:9333/json")).json();
const page = targets.find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const pending = new Map();
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const myId = ++id;
    pending.set(myId, resolve);
    ws.send(JSON.stringify({ id: myId, method, params }));
  });
const evaluate = async (expression) => {
  const res = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (res.result.exceptionDetails) throw new Error(JSON.stringify(res.result.exceptionDetails));
  return res.result.result.value;
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
await send("Page.enable");
await send("Page.navigate", { url });
await sleep(2500); // let hydration finish so the client action is wired up

// Fill the form using native setters so React sees the input events.
const filled = await evaluate(`(() => {
  const form = document.querySelector('#waitlist form');
  if (!form) return 'no-form';
  const set = (el, value) => {
    const proto = el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };
  set(form.querySelector('input[name=email]'), ${JSON.stringify(email)});
  set(form.querySelector('input[name=name]'), 'E2E Tester');
  set(form.querySelector('input[name=organization]'), 'Example Care Center');
  const select = form.querySelector('select[name=audience]');
  return 'filled audience=' + select.value;
})()`);
console.log(filled);

await evaluate(`document.querySelector('#waitlist form button[type=submit]').click(); 'clicked'`);

// Poll for the success or error state.
let status = "timeout";
for (let i = 0; i < 40; i++) {
  await sleep(250);
  const text = await evaluate(`(() => {
    const ok = document.querySelector('#waitlist [role=status]');
    if (ok) return 'success: ' + ok.textContent.trim().slice(0, 160);
    const err = document.querySelector('#waitlist [role=alert]');
    if (err) return 'error: ' + err.textContent.trim();
    return null;
  })()`);
  if (text) {
    status = text;
    break;
  }
}
console.log(status);

if (out) {
  const y = await evaluate(`document.querySelector('#waitlist').getBoundingClientRect().top + window.scrollY`);
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    clip: { x: 0, y, width: 1280, height: 900, scale: 1 },
  });
  writeFileSync(out, Buffer.from(shot.result.data, "base64"));
  console.log("wrote", out);
}
ws.close();
process.exit(status.startsWith("success") ? 0 : 1);
