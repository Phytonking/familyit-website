import { siteConfig, telHref } from "@/config/site";
import { Icon } from "@/components/icons";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export function Pricing() {
  const bookHref = siteConfig.bookingUrl ?? "/#contact";
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-20 bg-cream-deep/60 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="pricing-heading"
          eyebrow="Simple pricing"
          title="Know the price before we start"
          lede="No hourly surprises. Every option includes a plain-English summary and 30 days of follow-up."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {siteConfig.plans.map((plan) => (
            <li
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 ring-1 sm:p-8 ${
                plan.highlighted
                  ? "bg-ink text-white ring-ink shadow-soft lg:-my-3"
                  : "bg-white text-ink ring-line"
              }`}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3.5 left-7 rounded-full bg-apricot px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                  Most popular
                </span>
              ) : null}
              <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlighted ? "text-white/75" : "text-ink-soft"
                }`}
              >
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/75" : "text-ink-soft"
                  }`}
                >
                  {plan.unit}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Icon
                      name="check"
                      className={`mt-0.5 size-4.5 shrink-0 ${
                        plan.highlighted ? "text-apricot" : "text-teal"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={bookHref}
                variant={plan.highlighted ? "primary" : "secondary"}
                className={`mt-8 ${
                  plan.highlighted ? "!bg-apricot !text-ink hover:!bg-apricot/90" : ""
                }`}
              >
                {plan.cta}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-ink-soft text-pretty">
          Prices are starting rates and may vary for complex jobs. Need
          something custom, or help for a whole extended family?{" "}
          <a href={telHref} className="font-semibold text-teal underline-offset-4 hover:underline">
            Call {siteConfig.phone.display}
          </a>{" "}
          for a quote.
        </p>
      </Container>
    </section>
  );
}
