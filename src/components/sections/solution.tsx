import { solution } from "@/content/landing";
import { Prose, SplitSection } from "@/components/ui";

export function Solution() {
  return (
    <SplitSection
      id="solution"
      headingId="solution-heading"
      heading={solution.heading}
      tone="pine"
    >
      <Prose className="text-paper/85">
        {solution.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Prose>
      <dl className="mt-12 grid gap-8 border-t border-paper/20 pt-10 sm:grid-cols-3">
        {solution.pillars.map((pillar) => (
          <div key={pillar.title}>
            <dt className="text-2xl font-bold text-paper">{pillar.title}</dt>
            <dd className="mt-2 text-lg leading-relaxed text-paper/80">{pillar.body}</dd>
          </div>
        ))}
      </dl>
    </SplitSection>
  );
}
