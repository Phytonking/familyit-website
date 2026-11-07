import { services } from "@/content/landing";
import { Icon } from "@/components/icons";
import { Container, Pill, SectionHeading } from "@/components/ui";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="What we help with"
          title="Everything with a plug, a screen or a password"
          lede="If it lives in your home and connects to something, we can set it up, fix it or make it safer."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line transition-transform duration-200 hover:-translate-y-0.5 sm:p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-soft text-teal">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Examples">
                {service.examples.map((example) => (
                  <li key={example}>
                    <Pill>{example}</Pill>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
