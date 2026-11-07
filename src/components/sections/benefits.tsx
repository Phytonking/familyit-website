import { benefits } from "@/content/landing";
import { Icon } from "@/components/icons";
import { Container } from "@/components/ui";

/** One row per group: who it is for on the left, what changes on the right. */
export function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <h2
          id="benefits-heading"
          className="max-w-[20ch] text-3xl font-bold leading-tight tracking-tight text-pine text-balance sm:text-4xl"
        >
          {benefits.heading}
        </h2>
        <dl className="mt-12 divide-y divide-sage-deep border-y border-sage-deep">
          {benefits.groups.map((group) => (
            <div key={group.who} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
              <dt className="text-2xl font-bold lg:col-span-4">{group.who}</dt>
              <dd className="lg:col-span-8">
                <ul className="grid gap-4 sm:grid-cols-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft sm:text-xl">
                      <Icon name="check" className="mt-2 size-5 shrink-0 text-moss" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
