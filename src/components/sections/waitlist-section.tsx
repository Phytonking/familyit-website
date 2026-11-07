import type { WaitlistAudience } from "@/content/audiences";
import { siteConfig } from "@/config/site";
import { WaitlistForm } from "@/components/waitlist-form";
import { Container } from "@/components/ui";

export function WaitlistSection({
  heading = "Be first to know when FamilyIT opens",
  intro = "Tell us who you're thinking of. We'll shape early access around the people who need it most, and write to you before anyone else.",
  defaultAudience,
  source,
  formHeading,
}: {
  heading?: string;
  intro?: string;
  defaultAudience?: WaitlistAudience;
  source: string;
  formHeading?: string;
}) {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="scroll-mt-24 bg-pine py-20 text-paper sm:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2
            id="waitlist-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-paper/80 sm:text-xl">
            {intro}
          </p>
          <ul className="mt-8 space-y-3 text-lg text-paper/80">
            <li>{siteConfig.product.launchWindow}.</li>
            <li>{siteConfig.product.pricingNote}</li>
          </ul>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <WaitlistForm defaultAudience={defaultAudience} source={source} heading={formHeading} />
        </div>
      </Container>
    </section>
  );
}
