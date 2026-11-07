"use server";

import { getWaitlistProvider } from "@/lib/waitlist";
import { validateWaitlist, type WaitlistFieldErrors } from "@/lib/waitlist/validate";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success"; email: string }
  | { status: "error"; message: string; fieldErrors?: WaitlistFieldErrors };

export async function joinWaitlist(
  _previous: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Honeypot: real visitors never see or fill this field.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success", email: "" };
  }

  const result = validateWaitlist(formData);
  if (!result.ok) {
    return {
      status: "error",
      message: "Check the highlighted field and try again.",
      fieldErrors: result.errors,
    };
  }

  const sourceRaw = formData.get("source");
  const source =
    typeof sourceRaw === "string" && sourceRaw.startsWith("/") ? sourceRaw.slice(0, 200) : "/";

  try {
    await getWaitlistProvider().add({
      ...result.value,
      source,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[waitlist] failed to store signup", error);
    return {
      status: "error",
      message:
        "We couldn't save your details just now. Please try again in a moment.",
    };
  }

  return { status: "success", email: result.value.email };
}
