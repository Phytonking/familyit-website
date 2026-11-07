import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Page gutter and max width. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`}>{children}</div>
  );
}

/**
 * Section layout used across the site: a narrow heading column on the left,
 * content hanging to the right. Collapses to a single column on small screens.
 */
export function SplitSection({
  id,
  heading,
  headingId,
  children,
  className = "",
  tone = "paper",
}: {
  id?: string;
  heading: ReactNode;
  headingId: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "sage" | "pine";
}) {
  const tones = {
    paper: "",
    sage: "bg-sage",
    pine: "bg-pine text-paper",
  };
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-24 py-20 sm:py-28 ${tones[tone]} ${className}`}
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2
            id={headingId}
            className="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl"
          >
            {heading}
          </h2>
        </div>
        <div className="lg:col-span-7">{children}</div>
      </Container>
    </section>
  );
}

type ButtonVariant = "primary" | "secondary" | "onPine";

const buttonBase =
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 text-lg font-bold transition-colors duration-150";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-berry text-white hover:bg-berry-deep",
  secondary: "border-2 border-pine text-pine hover:bg-sage",
  onPine: "bg-paper text-pine hover:bg-sage",
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: ButtonVariant };

/** A link styled as a button. Works without JavaScript. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** Inline text link with a clear underline. */
export function TextLink({ className = "", children, ...rest }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`font-bold text-moss underline decoration-2 underline-offset-4 hover:text-pine ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Body paragraphs with a comfortable measure. */
export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[62ch] space-y-5 text-lg leading-relaxed sm:text-xl ${className}`}>
      {children}
    </div>
  );
}
