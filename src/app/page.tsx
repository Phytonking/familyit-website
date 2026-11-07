import type { Metadata } from "next";
import { faqPage } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Why } from "@/components/sections/why";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Why />
      <Pricing />
      <Faq />
      <Contact />
      <JsonLd data={faqPage()} />
    </>
  );
}
