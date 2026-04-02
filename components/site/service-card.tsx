import Link from "next/link";

import { ServiceIcon } from "@/components/site/service-icon";
import { Card } from "@/components/ui/card";
import type { ServiceCategory } from "@/lib/site";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  return (
    <Link href={`/services/${service.slug}`}>
      <Card className="group h-full space-y-5 transition duration-300 hover:-translate-y-1">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-soft">
          <ServiceIcon className="h-6 w-6" icon={service.icon} />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">{service.title}</h3>
          <p className="text-sm leading-7 text-brand-muted">{service.shortIntro}</p>
        </div>
        <div className="text-sm font-semibold text-brand-ink">Explore service</div>
      </Card>
    </Link>
  );
}
