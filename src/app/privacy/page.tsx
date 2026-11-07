import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${siteConfig.name} handles the information you share when you join the waitlist or contact us.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated={siteConfig.lastModified}>
      <section>
        <h2>Who we are</h2>
        <p>
          {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;) is building a
          technology care service for families and care centers. You can reach us at{" "}
          {siteConfig.contactEmail}.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li>
            When you join the waitlist: your email address, and optionally your name, who you are
            joining on behalf of, and an organization name.
          </li>
          <li>The page you signed up from and the time you signed up.</li>
          <li>Anything you choose to tell us when you email us.</li>
        </ul>
        <p>We do not use advertising trackers on this site.</p>
      </section>

      <section>
        <h2>How we use it</h2>
        <p>
          To tell you about FamilyIT, invite you to early access, and shape what we build around
          the people on the list. We do not sell your information or share it with third parties
          for their own marketing.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          Until you ask us to remove you, or until the waitlist closes and we have either invited
          you or deleted the list. Every email we send includes a way to leave the list.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask to see, correct or delete the information we hold about you at any time.
          Email {siteConfig.contactEmail} and we will respond within 30 days.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          When this policy changes we will update the date at the top of the page and, for
          significant changes, email the waitlist.
        </p>
      </section>
    </LegalPage>
  );
}
