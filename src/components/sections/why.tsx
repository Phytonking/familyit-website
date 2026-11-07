import { siteConfig } from "@/config/site";
import { trustPoints } from "@/content/landing";
import { Icon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";

export function Why() {
  return (
    <section
      id="why-familyit"
      aria-labelledby="why-heading"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="why-heading"
          eyebrow={`Why ${siteConfig.name}`}
          title="Tech support that treats you like family"
          lede="We started FamilyIT because good tech help shouldn't require a computer science degree, a long wait or a condescending tone."
        />

        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li key={point.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-apricot-soft text-apricot-deep">
                <Icon name={point.icon} className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {siteConfig.showTestimonials ? (
          <div className="mt-20">
            <h3 className="text-center font-display text-2xl font-semibold text-ink">
              What families say
            </h3>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {siteConfig.testimonials.map((t, i) => (
                <li
                  key={i}
                  className="relative flex flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line"
                >
                  {t.isPlaceholder ? (
                    <span className="mb-3 inline-flex w-fit items-center rounded-full border border-dashed border-apricot-deep/60 bg-apricot-soft px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-apricot-deep">
                      Sample, not a real review
                    </span>
                  ) : null}
                  <blockquote className="flex-1">
                    <p className="leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <p className="mt-4 text-sm">
                    <span className="font-semibold text-ink">{t.name}</span>
                    <span className="text-ink-soft">, {t.detail}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
