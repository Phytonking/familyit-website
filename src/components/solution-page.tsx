import type { Metadata } from "next";
import { ImageResponse } from "next/og";
import { absoluteUrl } from "@/config/site";
import { getSolution, solutions, type Solution } from "@/content/solutions";
import { faqPage, solutionGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { Icon, Mark } from "@/components/icons";
import { OgCard } from "@/components/og-card";
import { ButtonLink, Container, Prose, SplitSection, TextLink } from "@/components/ui";
import { FaqSection } from "@/components/sections/faq";
import { WaitlistSection } from "@/components/sections/waitlist-section";

/**
 * Shared implementation for the four static /solutions/<slug> routes.
 * Each route folder is a thin wrapper so unknown slugs 404 properly and every
 * page prerenders without runtime params.
 */

export function requireSolution(slug: string): Solution {
  const solution = getSolution(slug);
  if (!solution) throw new Error(`Unknown solution "${slug}"`);
  return solution;
}

export function solutionMetadata(slug: string): Metadata {
  const solution = requireSolution(slug);
  const path = `/solutions/${solution.slug}`;
  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: solution.title,
      description: solution.description,
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.description,
    },
  };
}

export const ogSize = { width: 1200, height: 630 };

export function solutionOgImage(slug: string) {
  const solution = requireSolution(slug);
  return new ImageResponse(
    <OgCard headline={solution.hero.headline} kicker={solution.navLabel} />,
    ogSize,
  );
}

export function SolutionPage({ slug }: { slug: string }) {
  const solution = requireSolution(slug);
  const path = `/solutions/${solution.slug}`;
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <article>
        <header className="pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="text-lg text-ink-soft">
                <TextLink href="/#who-its-for">Who it&apos;s for</TextLink>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                {solution.navLabel}
              </p>
              <h1 className="mt-6 max-w-[18ch] text-display font-bold text-pine text-balance lg:text-display-lg">
                {solution.hero.headline}
              </h1>
              <p className="mt-8 max-w-[56ch] text-xl leading-relaxed text-ink-soft sm:text-2xl sm:leading-relaxed">
                {solution.hero.lede}
              </p>
              <div className="mt-10">
                <ButtonLink href={`${path}#waitlist`}>Join the waitlist</ButtonLink>
              </div>
            </div>
            <div className="order-first mx-auto w-36 sm:w-44 lg:order-none lg:col-span-4 lg:w-full lg:max-w-[17rem] lg:justify-self-end">
              <Mark className="aspect-square w-full" />
            </div>
          </Container>
        </header>

        <SplitSection
          id="problem"
          headingId="problem-heading"
          heading={solution.problem.heading}
          tone="sage"
        >
          <Prose className="text-ink-soft">
            {solution.problem.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </SplitSection>

        <SplitSection id="solution" headingId="solution-heading" heading={solution.solution.heading}>
          <Prose className="text-ink-soft">
            {solution.solution.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </SplitSection>

        <SplitSection
          id="benefits"
          headingId="benefits-heading"
          heading={solution.benefits.heading}
          tone="pine"
        >
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {solution.benefits.items.map((item) => (
              <div key={item.title} className="border-t border-paper/25 pt-5">
                <dt className="text-2xl font-bold">{item.title}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-paper/80">{item.body}</dd>
              </div>
            ))}
          </dl>
        </SplitSection>

        <FaqSection faqs={solution.faqs} heading="Questions families ask us" tone="paper" />

        <WaitlistSection
          heading={solution.waitlistHeading}
          defaultAudience={solution.id}
          source={path}
          formHeading="Join the waitlist"
        />
      </article>

      <nav aria-labelledby="other-heading" className="py-16 sm:py-20">
        <Container>
          <h2 id="other-heading" className="text-2xl font-bold text-pine">
            Also from FamilyIT
          </h2>
          <ul className="mt-6 divide-y divide-sage-deep border-y border-sage-deep">
            {others.map((o) => (
              <li key={o.slug}>
                <TextLink
                  href={`/solutions/${o.slug}`}
                  className="flex items-center justify-between gap-4 py-4 text-xl no-underline hover:underline"
                >
                  {o.navLabel}
                  <Icon name="chevron" className="size-5 -rotate-90" />
                </TextLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <JsonLd data={solutionGraph(solution)} />
      <JsonLd data={faqPage(solution.faqs, absoluteUrl(path))} />
    </>
  );
}
