import Link from "next/link";
import { audienceOverview } from "@/content/landing";
import { Icon } from "@/components/icons";
import { Container } from "@/components/ui";

export function Audiences() {
  return (
    <section
      id="who-its-for"
      aria-labelledby="who-heading"
      className="scroll-mt-24 bg-sage py-20 sm:py-28"
    >
      <Container>
        <h2
          id="who-heading"
          className="text-3xl font-bold leading-tight tracking-tight text-pine sm:text-4xl"
        >
          Who it&apos;s for
        </h2>
        <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
          The same care, shaped around different lives. Each page goes deeper into the
          problem, what we do about it, and what changes.
        </p>
        <ul className="mt-10 divide-y divide-sage-deep border-y border-sage-deep">
          {audienceOverview.map((a) => (
            <li key={a.id}>
              <Link
                href={a.href}
                className="group grid gap-2 py-6 sm:grid-cols-12 sm:items-center sm:gap-8"
              >
                <span className="text-2xl font-bold text-ink group-hover:text-pine group-hover:underline sm:col-span-4">
                  {a.title}
                </span>
                <span className="text-lg leading-relaxed text-ink-soft sm:col-span-7">
                  {a.summary}
                </span>
                <Icon
                  name="chevron"
                  className="hidden size-7 -rotate-90 justify-self-end text-pine transition-transform group-hover:translate-x-1 sm:col-span-1 sm:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
