import { Card } from "@/components/ui/card";
import type { PartnerLogoItem } from "@/lib/site";

export function PartnerLogosSection({
  eyebrow = "Partnership ecosystem",
  title,
  description,
  items
}: {
  eyebrow?: string;
  title: string;
  description: string;
  items: PartnerLogoItem[];
}) {
  function getInitials(value: string) {
    return value
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
  }

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

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div
                className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white px-5 py-5 shadow-inset"
                key={item.name}
              >
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-paper/90 to-transparent" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
                      {item.category}
                    </p>
                    <p className="mt-3 max-w-[14rem] text-xl font-semibold tracking-[-0.03em] text-brand-ink">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-brand-paper text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink">
                    {getInitials(item.name)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
