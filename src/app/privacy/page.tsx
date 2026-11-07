import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information when you contact us or use our services.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated={siteConfig.lastModified}>
      <section>
        <h2>Who we are</h2>
        <p>
          {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;)
          provides technology support to households. You can reach us at{" "}
          {siteConfig.email} or {siteConfig.phone.display}.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li>
            Contact details you give us: name, phone number, email address and
            home address for in-home visits.
          </li>
          <li>
            A description of the problem and notes about the work we did, so we
            can provide follow-up support.
          </li>
          <li>
            Basic, anonymous website analytics if we enable them (we will update
            this policy when we do).
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use it</h2>
        <p>
          We use your information only to schedule and deliver the services you
          ask for, send you summaries and follow-ups, and handle billing. We do
          not sell your data or use it for third-party advertising.
        </p>
      </section>

      <section>
        <h2>Access to your devices and accounts</h2>
        <p>
          During a session we may need to see your screen or sign in to an
          account with you present. We only access what is needed to fix the
          problem, we do not keep copies of your files, and remote access ends
          completely when the session finishes. We recommend you change any
          password you shared with us once the work is done.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          We keep contact details and job notes while you are a customer and
          for a reasonable period afterwards for warranty and tax purposes, then
          delete them. You can ask us to delete your data at any time.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask to see, correct or delete the personal information we hold
          about you. Email {siteConfig.email} and we will respond within 30 days.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          If we change this policy we will update the date at the top of this
          page. Significant changes will be communicated by email.
        </p>
      </section>
    </LegalPage>
  );
}
