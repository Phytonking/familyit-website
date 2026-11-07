import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Horizontal page gutter + max width. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Eyebrow + heading + optional lede, used at the top of each section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-apricot-deep">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-balance"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft text-pretty">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-150 min-h-12";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-deep shadow-soft",
  secondary:
    "bg-white text-teal ring-1 ring-inset ring-line hover:bg-teal-soft hover:ring-teal/30",
  ghost: "text-teal hover:bg-teal-soft",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

/** Anchor styled as a button. Always a link, so it works without JS. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Small rounded label. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cream-deep px-3 py-1 text-sm font-medium text-ink-soft">
      {children}
    </span>
  );
}
