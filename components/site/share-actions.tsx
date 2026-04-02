"use client";

import { useMemo } from "react";

export function ShareActions({
  title,
  path
}: {
  title: string;
  path: string;
}) {
  const encodedUrl = useMemo(() => encodeURIComponent(path), [path]);
  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);

  async function handleNativeShare() {
    if (typeof navigator === "undefined" || !navigator.share) {
      return;
    }

    try {
      await navigator.share({ title, url: path });
    } catch {
      return;
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-brand-ink transition hover:border-black"
        onClick={() => void handleNativeShare()}
        type="button"
      >
        Share
      </button>
      <a
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-brand-ink transition hover:border-black"
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        rel="noreferrer"
        target="_blank"
      >
        WhatsApp
      </a>
      <a
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-brand-ink transition hover:border-black"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        rel="noreferrer"
        target="_blank"
      >
        Facebook
      </a>
      <a
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-brand-ink transition hover:border-black"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
}
