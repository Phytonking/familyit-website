import { problem, problemMoments } from "@/content/landing";
import { Container, Prose, SplitSection } from "@/components/ui";

export function Problem() {
  return (
    <>
      <section aria-labelledby="moments-heading" className="bg-sage py-20 sm:py-28">
        <Container>
          <h2 id="moments-heading" className="max-w-[24ch] text-2xl font-bold text-pine sm:text-3xl">
            You&apos;ve probably had one of these weeks.
          </h2>
          <ul className="mt-10 divide-y divide-sage-deep border-y border-sage-deep">
            {problemMoments.map((item) => (
              <li
                key={item.moment}
                className="grid gap-2 py-7 lg:grid-cols-12 lg:gap-10"
              >
                <p className="text-2xl font-bold leading-snug text-ink text-balance lg:col-span-7 sm:text-3xl">
                  {item.moment}
                </p>
                <p className="text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:pt-1.5 sm:text-xl">
                  {item.consequence}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SplitSection id="problem" headingId="problem-heading" heading={problem.heading}>
        <Prose className="text-ink-soft">
          {problem.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      </SplitSection>
    </>
  );
}
