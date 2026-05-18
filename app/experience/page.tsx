"use client";

import { Briefcase, MapPin } from "lucide-react";
import { useState } from "react";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  category: "Consulting" | "Field" | "Eco-tourism";
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "Renewable Environmental Company (REC)",
    title: "Environmental Specialist",
    period: "Oct 2025 — Present",
    location: "Saudi Arabia",
    category: "Consulting",
    bullets: [
      "Leading NCEC compliance projects across industrial clients.",
      "Designing and executing air-quality mitigation strategies.",
      "Industrial environmental consulting from baseline studies to corrective actions.",
    ],
  },
  {
    company: "PACHEM Global Pvt. Ltd.",
    title: "Environmental Engineer",
    period: "Nov 2024 — Sept 2025",
    location: "Pakistan",
    category: "Consulting",
    bullets: [
      "Authored Environmental Management Plans (EMPs) aligned with NEQS/PEQS.",
      "Handled permitting and EPA liaison for industrial clients.",
      "Audits, reporting, and stakeholder workshops.",
    ],
  },
  {
    company: "Environmental Services Pakistan (ESPAK)",
    title: "Environmental Field Analyst",
    period: "Jul 2022 — Nov 2024",
    location: "Pakistan",
    category: "Field",
    bullets: [
      "Operated advanced equipment — BAM 1020, Thermo Scientific iQ series and more.",
      "Cement sector: Maple Leaf, Bestway, DG Khan.",
      "Petroleum: PPL, Mari Petroleum. Automotive: Al-Ghazi Tractors.",
      "Hospitals and hydropower (Tarbela, Dasu) ambient & stack monitoring.",
    ],
  },
  {
    company: "Triisum",
    title: "Environmental Associate",
    period: "Nov 2021 — Jul 2022",
    location: "Islamabad, Pakistan",
    category: "Eco-tourism",
    bullets: [
      "Helped design eco-friendly tourism experiences and sustainability content.",
      "Field surveys and impact reporting for client destinations.",
    ],
  },
];

const filters = ["All", "Consulting", "Field", "Eco-tourism"] as const;

export default function ExperiencePage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? roles : roles.filter((r) => r.category === filter);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Career</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">From the field to the boardroom.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Four years across consulting, hands-on monitoring, and sustainable tourism.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
              filter === f
                ? "bg-brand text-brand-foreground border-brand shadow-sm"
                : "bg-card text-muted-foreground border-border hover:border-brand/40 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ol className="mt-10 relative border-l-2 border-dashed border-brand/30 pl-6 sm:pl-8 space-y-8">
        {visible.map((r) => (
          <li key={r.company} className="relative">
            <span className="absolute -left-[34px] sm:-left-[42px] top-1 grid place-items-center size-7 rounded-full bg-brand text-brand-foreground ring-4 ring-background">
              <Briefcase className="size-3.5" />
            </span>
            <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-display text-lg font-bold">{r.title}</div>
                  <div className="text-brand font-medium">{r.company}</div>
                  <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" /> {r.location}
                  </div>
                </div>
                <span className="rounded-full bg-highlight-soft text-highlight-foreground border border-highlight/30 px-3 py-1 text-xs font-semibold">
                  {r.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
