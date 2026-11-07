import Link from "next/link";
import { mailHref, siteConfig, telHref } from "@/config/site";
import { navLinks } from "@/content/landing";
import { Icon, Logo } from "@/components/icons";
import { Container } from "@/components/ui";

export function Footer() {
  const { address } = siteConfig;
  // Derived from config rather than the clock so the page prerenders fully.
  const year = Number(siteConfig.lastModified.slice(0, 4));
  const founded = Number(siteConfig.foundingYear);
  const copyrightYears =
    founded && founded < year ? `${founded} to ${year}` : String(year);

  return (
    <footer className="border-t border-line bg-cream-deep/60">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-lg font-display text-xl font-semibold text-ink"
          >
            <Logo className="size-9" />
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-xs text-ink-soft leading-relaxed">
            {siteConfig.tagline}. Remote help anywhere, in-home visits across{" "}
            {siteConfig.serviceArea.summary}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="text-ink-soft hover:text-teal hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            Service area
          </h2>
          <ul className="mt-4 space-y-2.5 text-ink-soft">
            {siteConfig.serviceArea.places.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-soft">
            {siteConfig.serviceArea.remoteNote}
          </p>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li className="flex items-start gap-2.5">
              <Icon name="phone" className="mt-0.5 size-5 shrink-0 text-teal" />
              <a href={telHref} className="hover:text-teal hover:underline">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="mt-0.5 size-5 shrink-0 text-teal" />
              <a href={mailHref} className="break-all hover:text-teal hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-teal" />
              <span>
                {address.streetAddress}
                <br />
                {address.addressLocality}, {address.addressRegion}{" "}
                {address.postalCode}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="clock" className="mt-0.5 size-5 shrink-0 text-teal" />
              <span>{siteConfig.hours.display}</span>
            </li>
          </ul>
        </address>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {copyrightYears} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-teal hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-teal hover:underline">
                Terms of service
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
