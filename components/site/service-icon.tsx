import type { ComponentType } from "react";

import {
  BriefcaseBusiness,
  CalendarRange,
  Megaphone,
  MicVocal,
  Palette,
  RadioTower,
  Sparkles,
  Speaker,
  Star,
  Users
} from "lucide-react";

import type { ServiceIconKey } from "@/lib/site";

const iconMap = {
  calendar: CalendarRange,
  briefcase: BriefcaseBusiness,
  users: Users,
  mic: MicVocal,
  sparkles: Sparkles,
  radio: RadioTower,
  palette: Palette,
  speaker: Speaker,
  megaphone: Megaphone,
  star: Star
} satisfies Record<ServiceIconKey, ComponentType<{ className?: string }>>;

export function ServiceIcon({
  icon,
  className
}: {
  icon: ServiceIconKey;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
