import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/landing";
import { solutions } from "@/content/solutions";
import { Icon, Mark } from "@/components/icons";
import { Container } from "@/components/ui";

const linkClass =
  "rounded-full px-4 py-2 text-lg font-bold text-ink hover:bg-sage";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage-deep/60 bg-paper/95 backdrop-blur-sm">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg text-2xl font-bold tracking-tight text-pine"
        >
          <Mark className="size-10" />
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {/* Solutions menu: native <details>, so it works without JavaScript. */}
          <details className="group relative">
            <summary className={`flex cursor-pointer items-center gap-1 ${linkClass}`}>
              Solutions
              <Icon name="chevron" className="details-chevron size-5 transition-transform" />
            </summary>
            <ul className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-sage-deep bg-paper p-2 shadow-card">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="block rounded-xl px-4 py-3 text-lg font-bold text-ink hover:bg-sage"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="ml-3 inline-flex min-h-12 items-center rounded-full bg-berry px-6 text-lg font-bold text-white hover:bg-berry-deep"
          >
            Join the waitlist
          </Link>
        </nav>

        {/* Small screens: one menu, also a <details>. */}
        <details className="relative lg:hidden">
          <summary
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-pine px-4 text-lg font-bold text-pine"
            aria-label="Menu"
          >
            Menu
            <Icon name="chevron" className="details-chevron size-5 transition-transform" />
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-full mt-3 w-[min(20rem,calc(100vw-3rem))] rounded-2xl border border-sage-deep bg-paper p-3 shadow-card"
          >
            <p className="px-3 pb-1 pt-2 text-base font-bold text-ink-soft">Solutions</p>
            <ul>
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="block rounded-xl px-3 py-2.5 text-lg font-bold text-ink hover:bg-sage"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-2 border-t border-sage-deep pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-2.5 text-lg font-bold text-ink hover:bg-sage"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#waitlist"
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-berry px-5 text-lg font-bold text-white hover:bg-berry-deep"
            >
              Join the waitlist
            </Link>
          </nav>
        </details>
      </Container>
    </header>
  );
}
