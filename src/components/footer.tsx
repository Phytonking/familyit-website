import Link from "next/link";
import { mailHref, siteConfig } from "@/config/site";
import { solutions } from "@/content/solutions";
import { Mark } from "@/components/icons";
import { Container } from "@/components/ui";

export function Footer() {
  // Derived from config rather than the clock so pages prerender fully.
  const year = Number(siteConfig.lastModified.slice(0, 4));
  const founded = Number(siteConfig.foundingYear);
  const years = founded && founded < year ? `${founded} to ${year}` : String(year);

  return (
    <footer className="border-t border-sage-deep bg-paper">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-lg text-2xl font-bold tracking-tight text-pine"
          >
            <Mark className="size-10" />
            {siteConfig.name}
          </Link>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">
            {siteConfig.tagline}. {siteConfig.product.launchWindow}.
          </p>
          <p className="mt-5 text-lg">
            <a
              href={mailHref}
              className="font-bold text-moss underline decoration-2 underline-offset-4 hover:text-pine"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>

        <nav aria-label="Solutions" className="lg:col-span-4">
          <h2 className="text-lg font-bold">Solutions</h2>
          <ul className="mt-4 space-y-3 text-lg">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="text-ink-soft hover:text-pine hover:underline"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site" className="lg:col-span-3">
          <h2 className="text-lg font-bold">FamilyIT</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <Link href="/#how-it-works" className="text-ink-soft hover:text-pine hover:underline">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-ink-soft hover:text-pine hover:underline">
                Questions
              </Link>
            </li>
            <li>
              <Link href="/#waitlist" className="text-ink-soft hover:text-pine hover:underline">
                Join the waitlist
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink-soft hover:text-pine hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ink-soft hover:text-pine hover:underline">
                Terms of service
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-sage-deep py-6 text-base text-ink-soft">
        &copy; {years} {siteConfig.legalName}. All rights reserved.
      </Container>
    </footer>
  );
}
