export function FormFeedback({
  error,
  success
}: {
  error?: string;
  success?: string;
}) {
  if (!error && !success) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      className={
        error
          ? "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
          : "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
      }
      role="status"
    >
      {error ?? success}
    </div>
  );
}
