import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { WaitlistEntry, WaitlistProvider } from "@/lib/waitlist/types";

/**
 * Development default: append one JSON object per line to a local file in
 * `data/` (gitignored). The file name can be changed with WAITLIST_FILE_NAME.
 * Not suitable for serverless production, where the filesystem is ephemeral.
 */
export function createFileProvider(
  fileName = process.env.WAITLIST_FILE_NAME ?? "waitlist.ndjson",
): WaitlistProvider {
  // Statically scoped to <cwd>/data so the bundler does not trace the whole project.
  const dir = join(process.cwd(), "data");
  const file = join(dir, fileName);
  return {
    name: `file:data/${fileName}`,
    async add(entry: WaitlistEntry) {
      await mkdir(dir, { recursive: true });
      await appendFile(file, JSON.stringify(entry) + "\n", "utf8");
    },
  };
}
