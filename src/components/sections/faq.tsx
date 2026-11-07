import { Icon } from "@/components/icons";
import { Container } from "@/components/ui";

type FaqItem = { question: string; answer: string };

/** Native <details> accordion: keyboard accessible, no client JavaScript. */
export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-sage-deep border-y border-sage-deep">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-6 rounded-lg text-left text-xl font-bold text-ink sm:text-2xl">
            <span>{faq.question}</span>
            <Icon
              name="chevron"
              className="details-chevron mt-1 size-7 shrink-0 text-pine transition-transform"
            />
          </summary>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({
  faqs,
  heading = "Questions people ask",
  tone = "sage",
}: {
  faqs: FaqItem[];
  heading?: string;
  tone?: "sage" | "paper";
}) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`scroll-mt-24 py-20 sm:py-28 ${tone === "sage" ? "bg-sage" : ""}`}
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <h2
          id="faq-heading"
          className="text-3xl font-bold leading-tight tracking-tight text-pine text-balance sm:text-4xl lg:col-span-4"
        >
          {heading}
        </h2>
        <div className="lg:col-span-8">
          <FaqList faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
