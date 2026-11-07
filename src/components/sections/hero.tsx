import { hero } from "@/content/landing";
import { Mark } from "@/components/icons";
import { ButtonLink, Container, TextLink } from "@/components/ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-24">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h1
            id="hero-heading"
            className="max-w-[15ch] text-display font-bold text-pine text-balance lg:text-display-lg"
          >
            {hero.headline}
          </h1>
          <p className="mt-8 max-w-[52ch] text-xl leading-relaxed text-ink-soft sm:text-2xl sm:leading-relaxed">
            {hero.lede}
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href="/#waitlist">{hero.primaryCta}</ButtonLink>
            <TextLink href="/#who-its-for" className="text-lg">
              {hero.secondaryCta}
            </TextLink>
          </div>
        </div>
        <div className="order-first mx-auto w-44 sm:w-56 lg:order-none lg:col-span-5 lg:w-full lg:max-w-md lg:justify-self-end">
          <Mark
            className="aspect-square w-full"
            title="Three circles leaning together: a family, with the smallest held between the others"
          />
        </div>
      </Container>
    </section>
  );
}
