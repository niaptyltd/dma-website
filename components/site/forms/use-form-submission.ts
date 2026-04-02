"use client";

import { useState } from "react";

import type { FormKind } from "@/lib/site-schemas";

export function useFormSubmission(kind: FormKind) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  async function submit(payload: Record<string, unknown>) {
    setIsSubmitting(true);
    setSuccessMessage(undefined);
    setErrorMessage(undefined);

    try {
      const response = await fetch(`/api/forms/${kind}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSuccessMessage(data.message ?? "Thanks. Your submission was received.");
      return true;
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
    submit
  };
}
