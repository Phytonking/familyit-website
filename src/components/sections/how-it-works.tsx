import { steps } from "@/content/landing";
import { siteConfig, telHref } from "@/config/site";
import { Icon } from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-20 bg-teal py-20 text-white sm:py-24"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-apricot">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance"
          >
            Three steps from &ldquo;it&apos;s broken&rdquo; to &ldquo;it just works&rdquo;
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-2xl bg-white/10 font-display text-xl font-semibold text-apricot ring-1 ring-white/20"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-white/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-lg font-medium text-pretty">
            Not sure which option you need? Call and we&apos;ll tell you
            honestly, in about two minutes.
          </p>
          <ButtonLink
            href={telHref}
            className="shrink-0 !bg-apricot !text-ink hover:!bg-apricot/90"
          >
            <Icon name="phone" className="size-5" />
            {siteConfig.phone.display}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
