import { Card } from "@/components/ui/card";
import type { TestimonialEntry } from "@/lib/site";

export function TestimonialsSection({
  eyebrow = "Testimonials",
  title,
  description,
  items
}: {
  eyebrow?: string;
  title: string;
  description: string;
  items: TestimonialEntry[];
}) {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <Card className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-4xl">
              {title}
            </h2>
            <p className="text-sm leading-8 text-brand-muted">{description}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {items.map((item) => (
              <div
                className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white px-5 py-6"
                key={`${item.name}-${item.organisation}`}
              >
                <div className="absolute right-5 top-5 text-6xl leading-none text-brand-accent">"</div>
                <p className="relative pr-6 text-sm leading-8 text-brand-ink">
                  <span aria-hidden="true">&ldquo;</span>
                  {item.quote}
                  <span aria-hidden="true">&rdquo;</span>
                </p>
                <div className="mt-5 border-t border-black/10 pt-4">
                  <p className="text-sm font-semibold text-brand-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-brand-muted">
                    {item.role}, {item.organisation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
