import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";
import { faqs } from "@/content/landing";
import { faqPage } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Benefits } from "@/components/sections/benefits";
import { Audiences } from "@/components/sections/audiences";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FaqSection } from "@/components/sections/faq";
import { WaitlistSection } from "@/components/sections/waitlist-section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Audiences />
      <HowItWorks />
      <FaqSection faqs={faqs} tone="paper" />
      <WaitlistSection source="/" />
      <JsonLd data={faqPage(faqs, absoluteUrl("/"))} />
    </>
  );
}
