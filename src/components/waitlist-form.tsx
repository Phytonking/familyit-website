"use client";

import { useActionState, useId } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { waitlistAudienceOptions, type WaitlistAudience } from "@/content/audiences";
import { siteConfig } from "@/config/site";

const initialState: WaitlistState = { status: "idle" };

const fieldClass =
  "mt-2 block w-full min-w-0 max-w-full rounded-lg border-2 border-sage-deep bg-white px-4 py-3 text-lg text-ink placeholder:text-ink-soft/60 focus:border-pine focus:outline-none aria-[invalid=true]:border-berry";

type Props = {
  /** Pre-select "who is this for". */
  defaultAudience?: WaitlistAudience;
  /** Path recorded with the signup. */
  source: string;
  /** Visible heading inside the form. */
  heading?: string;
};

export function WaitlistForm({ defaultAudience, source, heading }: Props) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const id = useId();
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};
  const showOrganization =
    defaultAudience === "care-centers" || defaultAudience === "other";

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-white p-8 text-ink shadow-card"
      >
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="size-12 text-pine"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="24" cy="24" r="21" />
          <path d="m15 24 6 6 12-13" />
        </svg>
        <h3 className="mt-5 text-2xl font-bold">{siteConfig.waitlist.successTitle}</h3>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          {siteConfig.waitlist.successBody}
        </p>
        {state.email ? (
          <p className="mt-3 text-lg">
            We&apos;ll write to <span className="font-bold">{state.email}</span>.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-2xl bg-white p-6 text-ink shadow-card sm:p-8"
      aria-labelledby={`${id}-heading`}
      aria-describedby={`${id}-privacy`}
    >
      <h3 id={`${id}-heading`} className="text-2xl font-bold">
        {heading ?? "Join the waitlist"}
      </h3>
      <p className="mt-2 text-lg text-ink-soft">{siteConfig.product.launchWindow}.</p>

      {state.status === "error" ? (
        <p
          role="alert"
          className="mt-5 rounded-lg border-2 border-berry/40 bg-berry/5 px-4 py-3 text-lg font-medium text-berry-deep"
        >
          {state.message}
        </p>
      ) : null}

      <input type="hidden" name="source" value={source} />

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Leave this field empty</label>
        <input
          id={`${id}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="size-px"
        />
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor={`${id}-email`} className="text-lg font-bold">
            Email <span className="font-normal text-ink-soft">(required)</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id={`${id}-email-error`} className="mt-2 text-base font-medium text-berry-deep">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${id}-name`} className="text-lg font-bold">
            Your name <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id={`${id}-name-error`} className="mt-2 text-base font-medium text-berry-deep">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${id}-audience`} className="text-lg font-bold">
            Who is this for? <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <select
            id={`${id}-audience`}
            name="audience"
            defaultValue={defaultAudience ?? ""}
            aria-invalid={errors.audience ? true : undefined}
            className={fieldClass}
          >
            <option value="">Choose if you like</option>
            {waitlistAudienceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.audience ? (
            <p className="mt-2 text-base font-medium text-berry-deep">{errors.audience}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${id}-organization`} className="text-lg font-bold">
            Organization{" "}
            <span className="font-normal text-ink-soft">
              {showOrganization ? "(optional)" : "(optional, for care centers)"}
            </span>
          </label>
          <input
            id={`${id}-organization`}
            name="organization"
            type="text"
            autoComplete="organization"
            aria-invalid={errors.organization ? true : undefined}
            className={fieldClass}
          />
          {errors.organization ? (
            <p className="mt-2 text-base font-medium text-berry-deep">
              {errors.organization}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-berry px-7 text-lg font-bold text-white transition-colors hover:bg-berry-deep disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Adding you to the list" : "Join the waitlist"}
      </button>
      <p id={`${id}-privacy`} className="mt-4 text-base leading-relaxed text-ink-soft">
        {siteConfig.waitlist.privacyNote}
      </p>
    </form>
  );
}
