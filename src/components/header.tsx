import Link from "next/link";
import { siteConfig, telHref } from "@/config/site";
import { navLinks } from "@/content/landing";
import { Icon, Logo } from "@/components/icons";
import { Container } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg font-display text-xl font-semibold tracking-tight text-ink"
        >
          <Logo className="size-9" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-cream-deep hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal-deep"
          >
            <Icon name="phone" className="size-4" />
            <span className="hidden sm:inline">{siteConfig.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* No-JS mobile menu using native <details>. */}
          <details className="relative md:hidden">
            <summary
              className="flex size-11 cursor-pointer items-center justify-center rounded-full text-ink hover:bg-cream-deep"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-6"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-full mt-3 w-56 rounded-2xl bg-white p-2 shadow-soft ring-1 ring-line"
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className="block rounded-xl px-4 py-2.5 text-base font-medium text-ink hover:bg-cream-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
