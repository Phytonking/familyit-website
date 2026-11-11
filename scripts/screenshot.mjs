// Usage: node scripts/screenshot.mjs <url> <width> <height> <out.png> [y]
// Requires Chrome started with --remote-debugging-port=9333.
import { writeFileSync } from "node:fs";

const [url, w, h, out, yArg] = process.argv.slice(2);
const width = Number(w), height = Number(h), y = Number(yArg ?? 0);

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

await send("Emulation.setDeviceMetricsOverride", {
  width, height, deviceScaleFactor: 1, mobile: width < 600,
});
await send("Page.enable");
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 2500));

const metrics = await send("Runtime.evaluate", {
  expression:
    "JSON.stringify({innerWidth: innerWidth, scrollWidth: document.documentElement.scrollWidth, bodyScrollWidth: document.body.scrollWidth, scrollHeight: document.documentElement.scrollHeight})",
  returnByValue: true,
});
console.log("metrics", metrics.result.result.value);

// Find elements wider than the viewport.
const wide = await send("Runtime.evaluate", {
  expression: `JSON.stringify([...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(e=>e.tagName+'.'+String(e.className).slice(0,60)+' right='+Math.round(e.getBoundingClientRect().right)))`,
  returnByValue: true,
});
console.log("overflowing", wide.result.result.value);

const shot = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: true,
  clip: { x: 0, y, width, height, scale: 1 },
});
writeFileSync(out, Buffer.from(shot.result.data, "base64"));
console.log("wrote", out);
ws.close();
