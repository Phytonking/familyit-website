import { faqs } from "@/content/landing";
import { Icon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";

/** Native <details> accordion: keyboard accessible, no client JavaScript. */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          id="faq-heading"
          eyebrow="Questions"
          title="Frequently asked questions"
          lede="Still curious about something? Call or email and a real person will answer."
          align="left"
        />

        <div className="divide-y divide-line rounded-3xl bg-white px-6 shadow-soft ring-1 ring-line sm:px-8">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg text-left font-display text-lg font-semibold text-ink">
                <span>{faq.question}</span>
                <Icon
                  name="chevron"
                  className="faq-chevron size-5 shrink-0 text-teal transition-transform duration-200"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
