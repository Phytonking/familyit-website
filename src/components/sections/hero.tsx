import { siteConfig, telHref } from "@/config/site";
import { Icon } from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";

const reassurances = [
  "Remote or in-home",
  "Plain English, no jargon",
  "No fix, no fee",
];

const checklist = [
  { label: "Wi-Fi reaches the back bedroom", done: true },
  { label: "Grandpa's iPad set up for video calls", done: true },
  { label: "Photos backing up every night", done: true },
  { label: "Screen-time limits on the kids' tablets", done: false },
];

export function Hero() {
  const primaryHref = siteConfig.bookingUrl ?? "/#contact";
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Soft background blobs, purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-apricot-soft/80 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-teal-soft/80 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft ring-1 ring-line">
            <span className="size-2 rounded-full bg-teal" aria-hidden="true" />
            Serving {siteConfig.serviceArea.summary}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl text-balance"
          >
            Tech help your whole family will actually understand.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
            From flaky Wi-Fi to a new phone for Grandma, {siteConfig.name} fixes
            the technology in your home and explains it patiently, without the
            jargon. Remote sessions or friendly in-home visits.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={telHref}>
              <Icon name="phone" className="size-5" />
              Call {siteConfig.phone.display}
            </ButtonLink>
            <ButtonLink href={primaryHref} variant="secondary">
              Book a visit
              <Icon name="arrow" className="size-5" />
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
            {reassurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Icon name="check" className="size-4 text-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Illustrative "visit summary" card. Fixed dimensions avoid layout shift. */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line sm:p-8">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-semibold text-ink">
                Today&apos;s home visit
              </p>
              <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-deep">
                In progress
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3"
                >
                  <span
                    aria-hidden="true"
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full ${
                      item.done
                        ? "bg-teal text-white"
                        : "border-2 border-dashed border-line bg-white"
                    }`}
                  >
                    {item.done ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-3.5"
                      >
                        <path d="m6 12 4 4 8-8" />
                      </svg>
                    ) : null}
                  </span>
                  <span
                    className={`text-sm font-medium sm:text-base ${
                      item.done ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                    {item.done ? null : (
                      <span className="sr-only"> (not yet done)</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-apricot-soft/70 px-4 py-3">
              <Icon name="chat" className="size-5 shrink-0 text-apricot-deep" />
              <p className="text-sm text-ink">
                &ldquo;Here&apos;s a one-page summary of what we changed and how to
                undo it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
