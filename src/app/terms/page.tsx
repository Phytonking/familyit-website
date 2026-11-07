import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `The terms under which ${siteConfig.name} provides remote and in-home technology support.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" updated={siteConfig.lastModified}>
      <section>
        <h2>Our services</h2>
        <p>
          {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;) provides
          technology setup, troubleshooting and advice for households, either
          remotely or at your home within our service area. By booking a
          session you agree to these terms.
        </p>
      </section>

      <section>
        <h2>Bookings and cancellations</h2>
        <ul>
          <li>Sessions are confirmed by phone or email.</li>
          <li>
            You can reschedule or cancel free of charge up to 24 hours before a
            booked session. Later cancellations may be charged a fee.
          </li>
          <li>
            Care plan memberships renew monthly and can be cancelled at any time
            before the next renewal.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pricing and payment</h2>
        <p>
          Prices are quoted before work begins. If we cannot resolve the problem
          you booked us for, the session fee is waived. Hardware, software
          licences and third-party subscriptions are not included unless stated.
        </p>
      </section>

      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Have a reliable backup of important files before any repair.</li>
          <li>Be present, or have an authorised adult present, for home visits.</li>
          <li>Provide passwords only for accounts you own or are authorised to manage.</li>
        </ul>
      </section>

      <section>
        <h2>Limits of liability</h2>
        <p>
          We take great care with your equipment and data. However, technology
          can fail unexpectedly, and we are not liable for loss of data,
          indirect losses, or faults unrelated to the work we performed. Our
          total liability for any job is limited to the amount you paid for it.
        </p>
      </section>

      <section>
        <h2>Follow-up support</h2>
        <p>
          Every job includes 30 days of follow-up support for the specific issue
          we worked on. New or unrelated problems are treated as a new booking.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Email {siteConfig.email} or call{" "}
          {siteConfig.phone.display}.
        </p>
      </section>
    </LegalPage>
  );
}
