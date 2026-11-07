import { isWaitlistAudience, type WaitlistAudience } from "@/content/audiences";

export type WaitlistFieldErrors = Partial<
  Record<"email" | "name" | "audience" | "organization", string>
>;

export type WaitlistInput = {
  email: string;
  name?: string;
  audience?: WaitlistAudience;
  organization?: string;
};

type ValidationResult =
  | { ok: true; value: WaitlistInput }
  | { ok: false; errors: WaitlistFieldErrors };

const MAX_EMAIL = 254;
const MAX_NAME = 120;
const MAX_ORG = 160;

// Pragmatic, not RFC-perfect: one @, no spaces, a dot in the domain.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateWaitlist(formData: FormData): ValidationResult {
  const errors: WaitlistFieldErrors = {};

  const email = text(formData.get("email")).toLowerCase();
  if (!email) {
    errors.email = "Enter your email address so we can let you know.";
  } else if (email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    errors.email = "That email address doesn't look right. Check for typos.";
  }

  const name = text(formData.get("name"));
  if (name.length > MAX_NAME) {
    errors.name = `Keep your name under ${MAX_NAME} characters.`;
  }

  const audienceRaw = text(formData.get("audience"));
  let audience: WaitlistAudience | undefined;
  if (audienceRaw) {
    if (isWaitlistAudience(audienceRaw)) {
      audience = audienceRaw;
    } else {
      errors.audience = "Choose one of the options in the list.";
    }
  }

  const organization = text(formData.get("organization"));
  if (organization.length > MAX_ORG) {
    errors.organization = `Keep the organization name under ${MAX_ORG} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      email,
      name: name || undefined,
      audience,
      organization: organization || undefined,
    },
  };
}
