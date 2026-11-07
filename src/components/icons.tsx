import type { SVGProps } from "react";

/** Minimal inline icons. Decorative unless a `title` is given. */
export type IconName = "chevron" | "check" | "mail" | "menu" | "close";

const paths: Record<IconName, React.ReactNode> = {
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; title?: string };

export function Icon({ name, title, className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      className={className ?? "size-6"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

/**
 * Brand mark: three paper-cut circles leaning on each other, like people in
 * a family photo. The smallest, in berry, is the one being looked after.
 * Used small in the header and footer, large in page heroes.
 */
export function Mark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className ?? "size-10"}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <circle cx="74" cy="124" r="68" fill="#c9d6cb" />
      <circle cx="134" cy="112" r="56" fill="#244b43" stroke="#fbfaf7" strokeWidth="5" />
      <circle cx="104" cy="62" r="34" fill="#7c3c5c" stroke="#fbfaf7" strokeWidth="5" />
    </svg>
  );
}
