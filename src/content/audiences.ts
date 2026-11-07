/**
 * The four people/groups FamilyIT serves. Shared by the waitlist form, the
 * "who it's for" section, navigation and the solution pages.
 */

export const audienceIds = [
  "seniors",
  "disabilities",
  "children",
  "care-centers",
] as const;

export type AudienceId = (typeof audienceIds)[number];

/** Value accepted by the waitlist form's "who is this for" field. */
export type WaitlistAudience = AudienceId | "other";

export const waitlistAudienceOptions: { value: WaitlistAudience; label: string }[] = [
  { value: "seniors", label: "An older relative" },
  { value: "disabilities", label: "A person with a disability" },
  { value: "children", label: "A child" },
  { value: "care-centers", label: "A care center or community" },
  { value: "other", label: "Someone else, or myself" },
];

export function isWaitlistAudience(value: string): value is WaitlistAudience {
  return (audienceIds as readonly string[]).includes(value) || value === "other";
}
