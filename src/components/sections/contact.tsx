import { mailHref, siteConfig, telHref } from "@/config/site";
import { Icon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30";

const helpTopics = [
  "Wi-Fi or internet",
  "Computer, phone or tablet",
  "Parental controls",
  "Backups or passwords",
  "Help for an older relative",
  "Smart home",
  "Something else",
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-cream-deep/60 py-20 sm:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow="Get in touch"
            title="Tell us what's not working"
            lede="Describe it in your own words. We'll reply within one working day with a plan and a price."
            align="left"
          />

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-teal ring-1 ring-line">
                <Icon name="phone" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-soft">Call or text</p>
                <a
                  href={telHref}
                  className="font-display text-xl font-semibold text-ink hover:text-teal"
                >
                  {siteConfig.phone.display}
                </a>
                <p className="text-sm text-ink-soft">{siteConfig.hours.display}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-teal ring-1 ring-line">
                <Icon name="mail" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-soft">Email</p>
                <a
                  href={mailHref}
                  className="break-all font-display text-xl font-semibold text-ink hover:text-teal"
                >
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-teal ring-1 ring-line">
                <Icon name="pin" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-soft">In-home visits</p>
                <p className="font-display text-xl font-semibold text-ink">
                  {siteConfig.serviceArea.summary}
                </p>
                <p className="text-sm text-ink-soft">
                  {siteConfig.serviceArea.remoteNote}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/*
          No backend yet. The form opens the visitor's email client with the
          fields pre-filled. TODO: replace `action`/`method`/`encType` with a
          Server Action or a form service (Formspree, Resend, etc.) before launch.
        */}
        <form
          action={mailHref}
          method="post"
          encType="text/plain"
          className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line sm:p-8"
          aria-labelledby="form-heading"
        >
          <h3 id="form-heading" className="font-display text-xl font-semibold text-ink">
            Request a callback
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            Fields marked <span className="text-apricot-deep">*</span> are required.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Your name <span className="text-apricot-deep" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="Name"
                type="text"
                autoComplete="name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-ink">
                Phone <span className="text-apricot-deep" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="Phone"
                type="tel"
                autoComplete="tel"
                required
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="topic" className="text-sm font-medium text-ink">
                What do you need help with?
              </label>
              <select
                id="topic"
                name="Topic"
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Choose one
                </option>
                {helpTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Tell us a bit more <span className="text-apricot-deep" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="Message"
                rows={4}
                required
                placeholder="For example: the Wi-Fi drops out in the kitchen every evening."
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-base font-semibold text-white shadow-soft transition-colors hover:bg-teal-deep"
          >
            Send request
            <Icon name="arrow" className="size-5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-soft">
            Sending opens your email app with this message ready to go. We never
            share your details.
          </p>
        </form>
      </Container>
    </section>
  );
}
