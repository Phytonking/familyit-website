import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";

/** Shared shell for privacy and terms pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-teal underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated {updated}</p>

        <div className="mt-6 rounded-2xl border border-dashed border-apricot-deep/50 bg-apricot-soft/60 p-4 text-sm text-ink">
          <strong>Placeholder.</strong> This text is a starting point written
          for a small tech support business and has not been reviewed by a
          lawyer. Replace it with your own policy before launch.
        </div>

        <div className="prose-legal mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </Container>
    </article>
  );
}
