import Link from "next/link";
import { Wind, FlaskConical, ShieldCheck, ClipboardList, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services — Farhan Ali",
  description: "Environmental services: stack monitoring, EIA, NCEC/NEQS audits, EMP and permitting.",
};

const services = [
  {
    icon: Wind,
    title: "Stack Emissions & Ambient Air Quality Monitoring",
    desc: "End-to-end air monitoring using BAM 1020, Thermo Scientific iQ and other field-proven kit. Sampling, lab coordination, and reporting.",
    perks: ["Calibrated equipment", "On-site analyst", "Regulator-ready reports"],
  },
  {
    icon: FlaskConical,
    title: "EIA & IEE",
    desc: "Environmental Impact Assessments and Initial Environmental Examinations — from screening to public consultation to final filing.",
    perks: ["Baseline studies", "Mitigation planning", "Agency submission"],
  },
  {
    icon: ShieldCheck,
    title: "NCEC / NEQS Compliance Audits",
    desc: "Independent audits against Saudi NCEC and Pakistan NEQS frameworks with clear, prioritised corrective action plans.",
    perks: ["Gap analysis", "Action roadmap", "Re-audit support"],
  },
  {
    icon: ClipboardList,
    title: "EMP & Permitting",
    desc: "Environmental Management Plans that actually get used. Permit applications, renewals, and ongoing regulator liaison.",
    perks: ["Tailored to your site", "Trackable KPIs", "Renewal calendar"],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Services</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Pick a problem. I'll bring the toolkit.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Modular services for industrial clients — engage one, or stack them all into a full compliance program.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand/40">
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-highlight/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="size-12 grid place-items-center rounded-2xl bg-brand-gradient text-brand-foreground transition-transform group-hover:rotate-6">
                <Icon className="size-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.perks.map((p) => (
                  <li key={p} className="rounded-full bg-brand-soft text-brand px-3 py-1 text-xs font-medium">{p}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-12 relative overflow-hidden rounded-3xl bg-highlight p-10 text-highlight-foreground shadow-xl">
        <div className="relative max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">Not sure where to start?</h2>
          <p className="mt-2">Tell me about your facility and I'll suggest the right combination.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover px-5 py-3 text-sm font-semibold text-brand-foreground hover:scale-[1.03] transition shadow-md">
            Book a consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
