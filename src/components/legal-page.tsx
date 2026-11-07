import type { ReactNode } from "react";
import { Container, TextLink } from "@/components/ui";

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
        <TextLink href="/">Back to home</TextLink>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-pine sm:text-5xl">{title}</h1>
        <p className="mt-3 text-lg text-ink-soft">Last updated {updated}</p>

        <div className="mt-8 rounded-xl border-2 border-dashed border-berry/50 bg-berry/5 p-5 text-lg text-ink">
          <strong>Placeholder.</strong> This text is a starting point written for a
          pre-launch waitlist and has not been reviewed by a lawyer. Replace it before launch.
        </div>

        <div className="mt-12 space-y-10 text-lg leading-relaxed text-ink-soft [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </Container>
    </article>
  );
}
