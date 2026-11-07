import type { WaitlistAudience } from "@/content/audiences";

/** A validated waitlist signup, ready to be stored. */
export type WaitlistEntry = {
  email: string;
  name?: string;
  audience?: WaitlistAudience;
  organization?: string;
  /** Page the form was submitted from, e.g. "/solutions/seniors". */
  source: string;
  /** ISO 8601 timestamp set on the server. */
  createdAt: string;
};

/**
 * Pluggable storage. Implement this to send signups to Resend, Loops,
 * a database, a spreadsheet, or anything else.
 */
export interface WaitlistProvider {
  /** Human-readable name used in logs. */
  readonly name: string;
  /** Persist one entry. Throw on failure; the caller turns it into a user-facing error. */
  add(entry: WaitlistEntry): Promise<void>;
}
