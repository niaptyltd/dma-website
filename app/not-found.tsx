import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center gap-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4b06d]">404</p>
      <h1 className="font-heading text-4xl font-semibold text-brand-ink">Page not found</h1>
      <p className="max-w-md text-sm text-brand-muted">
        The page you requested does not exist, has moved, or is not part of the Dumbe Music Awards website.
      </p>
      <Link
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-5 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
        href="/"
      >
        Back to home
      </Link>
    </div>
  );
}
