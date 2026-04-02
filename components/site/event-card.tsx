import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { EventEntry } from "@/lib/site";
import { formatDate } from "@/utils/format";

export function EventCard({ event }: { event: EventEntry }) {
  return (
    <Link href={`/events/${event.slug}`}>
      <Card className="group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          <Image
            alt={event.gallery[0]?.alt ?? event.title}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            src={event.heroImage}
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
            <span>{event.status}</span>
            <span>{event.category}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">{event.title}</h3>
          <p className="text-sm leading-7 text-brand-muted">{event.summary}</p>
          <div className="space-y-1 text-sm text-brand-muted">
            <p>{formatDate(event.date)} at {event.time}</p>
            <p>{event.location}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
