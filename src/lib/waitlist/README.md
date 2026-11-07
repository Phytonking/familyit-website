# Waitlist storage

Signups flow: `WaitlistForm` (client component, `useActionState`) →
`joinWaitlist` server action (`src/app/actions/waitlist.ts`) →
`validateWaitlist` → `getWaitlistProvider().add(entry)`.

The server action:

- validates every field on the server (email required; name, audience and
  organization optional and length-checked),
- drops submissions where the hidden honeypot field `website` is filled in
  (bots get a fake success so they stop retrying),
- records `source` (the page path) and `createdAt`,
- returns field errors or a success state for the form to render.

## Default provider: local file

`WAITLIST_PROVIDER=file` (the default) appends NDJSON to `data/waitlist.ndjson`
(or `data/$WAITLIST_FILE_NAME`). The `data/` directory is gitignored. This is
for local development only: serverless filesystems are ephemeral.

## Adding a real provider

1. Create `src/lib/waitlist/providers/<name>.ts` exporting a function that
   returns a `WaitlistProvider` (`{ name, add(entry) }`).
2. Register it in the `switch` in `src/lib/waitlist/index.ts`.
3. Set `WAITLIST_PROVIDER=<name>` and any API keys in `.env.local` / your host.

Only `add` is required. Throw on failure; the action turns it into a friendly
error and logs the cause on the server.
