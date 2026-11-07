import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `The terms that apply to this website and the ${siteConfig.name} waitlist.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" updated={siteConfig.lastModified}>
      <section>
        <h2>About this site</h2>
        <p>
          This website is operated by {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;). It
          describes a service that is not yet available and lets you join a waitlist for it. By
          using the site you agree to these terms.
        </p>
      </section>

      <section>
        <h2>The waitlist</h2>
        <ul>
          <li>Joining the waitlist is free and does not commit you to anything.</li>
          <li>
            A place on the waitlist is not a guarantee of service, pricing or a launch date.
            Details described on this site may change before launch.
          </li>
          <li>You can leave the waitlist at any time using the link in our emails or by contacting us.</li>
        </ul>
      </section>

      <section>
        <h2>Accuracy</h2>
        <p>
          We describe FamilyIT as we intend to build it. Features, regions and pricing are subject
          to change, and nothing on this site is professional, medical or legal advice.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>
          Please do not submit other people&apos;s details without their permission, attempt to
          overload the site, or use it for anything unlawful.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          The site is provided as is. To the extent permitted by law, we are not liable for losses
          arising from your use of it or from any change to the plans described here.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Questions about these terms? Email {siteConfig.contactEmail}.</p>
      </section>
    </LegalPage>
  );
}
