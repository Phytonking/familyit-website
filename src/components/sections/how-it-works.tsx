import { steps } from "@/content/landing";
import { Container } from "@/components/ui";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2
            id="how-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-pine text-balance sm:text-4xl"
          >
            How it works
          </h2>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
            The details will grow as we build, but the shape stays the same: get to know the
            person, make things right, and stay.
          </p>
        </div>
        <ol className="lg:col-span-7">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-t border-sage-deep py-7 first:border-t-0 first:pt-0 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full bg-pine text-2xl font-bold text-paper"
              >
                {index + 1}
              </span>
              <div className="pt-1.5">
                <h3 className="text-2xl font-bold">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[54ch] text-lg leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
