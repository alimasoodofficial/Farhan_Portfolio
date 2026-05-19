import { ServicesList } from "@/components/sections/services/services-list";
import { ServicesCTA } from "@/components/sections/services/services-cta";

export const metadata = {
  title: "Services — Farhan Ali",
  description: "Environmental services: stack monitoring, EIA, NCEC/NEQS audits, EMP and permitting.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Services</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Pick a problem. I'll bring the toolkit.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Modular services for industrial clients — engage one, or stack them all into a full compliance program.
      </p>

      <ServicesList />
      <ServicesCTA />
    </div>
  );
}
