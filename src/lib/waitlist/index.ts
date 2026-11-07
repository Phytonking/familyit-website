import { createFileProvider } from "@/lib/waitlist/providers/file";
import type { WaitlistProvider } from "@/lib/waitlist/types";

export type { WaitlistEntry, WaitlistProvider } from "@/lib/waitlist/types";

/**
 * Pick the storage provider from the environment.
 *
 *   WAITLIST_PROVIDER=file   (default) append to data/waitlist.ndjson (or data/$WAITLIST_FILE_NAME)
 *
 * TODO before launch: add a real provider and select it here. For example:
 *
 *   WAITLIST_PROVIDER=resend  -> src/lib/waitlist/providers/resend.ts
 *     use the Resend Audiences API with RESEND_API_KEY and RESEND_AUDIENCE_ID
 *   WAITLIST_PROVIDER=loops   -> src/lib/waitlist/providers/loops.ts
 *     POST to https://app.loops.so/api/v1/contacts/create with LOOPS_API_KEY
 *   WAITLIST_PROVIDER=postgres -> insert into a `waitlist` table via your driver
 *
 * Each provider only needs to implement `WaitlistProvider.add`.
 */
export function getWaitlistProvider(): WaitlistProvider {
  const kind = process.env.WAITLIST_PROVIDER ?? "file";
  switch (kind) {
    case "file":
      return createFileProvider();
    default:
      throw new Error(
        `Unknown WAITLIST_PROVIDER "${kind}". Implement it in src/lib/waitlist/providers and register it in src/lib/waitlist/index.ts.`,
      );
  }
}
