import type { SVGProps } from "react";

/**
 * Small inline SVG icon set (24x24, stroke-based). Decorative by default:
 * icons are `aria-hidden` unless a `title` is supplied.
 */

export type IconName =
  | "wifi"
  | "devices"
  | "shield"
  | "lock"
  | "heart"
  | "home"
  | "chat"
  | "check"
  | "clock"
  | "badge"
  | "sparkle"
  | "phone"
  | "mail"
  | "pin"
  | "chevron"
  | "arrow";

const paths: Record<IconName, React.ReactNode> = {
  wifi: (
    <>
      <path d="M2.5 8.5a16 16 0 0 1 19 0" />
      <path d="M5.5 12a11.5 11.5 0 0 1 13 0" />
      <path d="M8.5 15.5a7 7 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="5" width="13" height="10" rx="1.5" />
      <path d="M6 18.5h6" />
      <path d="M9 15v3.5" />
      <rect x="17" y="9" width="4.5" height="9.5" rx="1" />
      <path d="M19.25 16.5h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.75 4.5 5.5v6c0 4.5 3.2 7.9 7.5 9.75 4.3-1.85 7.5-5.25 7.5-9.75v-6L12 2.75Z" />
      <path d="m9 12 2 2 4-4.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" />
    </>
  ),
  heart: (
    <path d="M12 20.5s-7.5-4.6-7.5-10A4.25 4.25 0 0 1 12 7.6a4.25 4.25 0 0 1 7.5 2.9c0 5.4-7.5 10-7.5 10Z" />
  ),
  home: (
    <>
      <path d="m3.5 11 8.5-7 8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16v10H9.5L5.5 19v-3.5H4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="m8.5 12.25 2.25 2.25 4.75-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  badge: (
    <>
      <path d="M12 3 14.2 5h3l.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9h-3L12 21l-2.2-1.8h-3l-.9-2.9-2.4-1.8.9-2.9-.9-2.9 2.4-1.8.9-2.9h3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.8 9.2 19.5 11l-5.7 1.8L12 18.5l-1.8-5.7L4.5 11l5.7-1.8z" />
      <path d="M19 3.5v3M17.5 5h3" />
    </>
  ),
  phone: (
    <path d="M5.5 3.5h3l1.8 4.3-2.1 1.5a10.5 10.5 0 0 0 6.5 6.5l1.5-2.1 4.3 1.8v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.2-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.8-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Accessible label. Omit for purely decorative icons. */
  title?: string;
};

export function Icon({ name, title, className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
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

/** Wordmark: a small house-with-heart glyph used in header, footer and icons. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={className ?? "size-9"}
    >
      <rect width="40" height="40" rx="11" fill="#0f6b5f" />
      <path
        d="M9.5 19.5 20 11l10.5 8.5"
        fill="none"
        stroke="#fbf7f0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 18.5V29h15V18.5"
        fill="none"
        stroke="#fbf7f0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 26.5s-4-2.6-4-5.3a2.1 2.1 0 0 1 4-1 2.1 2.1 0 0 1 4 1c0 2.7-4 5.3-4 5.3Z"
        fill="#f4a261"
      />
    </svg>
  );
}
