import { ServicesList } from "@/components/sections/services/services-list";
import { ServicesCTA } from "@/components/sections/services/services-cta";

export const metadata = {
  title: "Services — Farhan Ali",
  description: "Environmental services: stack monitoring, EIA, NCEC/NEQS audits, EMP and permitting.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-8">
      <ServicesList />
      <ServicesCTA />
    </div>
  );
}
