"use client";

import { Briefcase, MapPin, Wrench, Leaf, Layers, Calendar, ArrowUpRight } from "lucide-react";
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
      "Leading national NCEC regulatory compliance projects across multiple heavy industrial clients.",
      "Designing and executing stack-emission air quality mitigation strategies for petrochemical facilities.",
      "Providing end-to-end industrial environmental consulting, from baseline impact studies to corrective action audits.",
    ],
  },
  {
    company: "PACHEM Global Pvt. Ltd.",
    title: "Environmental Engineer",
    period: "Nov 2024 — Sept 2025",
    location: "Pakistan",
    category: "Consulting",
    bullets: [
      "Authored Environmental Management Plans (EMPs) strictly aligned with NEQS/PEQS regulatory benchmarks.",
      "Managed industrial permit processing and served as the technical liaison to regional Environmental Protection Agencies.",
      "Conducted extensive environmental compliance audits, technical reports, and multi-stakeholder advisory workshops.",
    ],
  },
  {
    company: "Environmental Services Pakistan (ESPAK)",
    title: "Environmental Field Analyst",
    period: "Jul 2022 — Nov 2024",
    location: "Pakistan",
    category: "Field",
    bullets: [
      "Operated advanced air-monitoring instrumentation including BAM 1020, Thermo Scientific iQ gas analyzers, and particulate monitors.",
      "Delivered source & ambient emission reports for major cement sector clients including Maple Leaf, Bestway, and DG Khan.",
      "Conducted stack and workplace safety monitoring for petroleum assets (PPL, Mari Petroleum) and automotive plants (Al-Ghazi).",
      "Managed specialized hydro-acoustic & stack safety field analyst missions across prominent hydro-power infrastructure (Tarbela, Dasu).",
    ],
  },
  {
    company: "Triisum",
    title: "Environmental Associate",
    period: "Nov 2021 — Jul 2022",
    location: "Islamabad, Pakistan",
    category: "Eco-tourism",
    bullets: [
      "Designed and modeled regional eco-friendly tourism blueprints and interactive community-driven sustainability guides.",
      "Conducted comprehensive rural environmental field surveys and local eco-impact reporting for client destinations.",
    ],
  },
];

const filters = [
  { name: "All", icon: <Layers className="size-4" /> },
  { name: "Consulting", icon: <Briefcase className="size-4" /> },
  { name: "Field", icon: <Wrench className="size-4" /> },
  { name: "Eco-tourism", icon: <Leaf className="size-4" /> },
] as const;

export function ExperienceTimeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]["name"]>("All");
  const visible = filter === "All" ? roles : roles.filter((r) => r.category === filter);

  // Helper to match category with appropriate icon
  const getCategoryIcon = (category: Role["category"]) => {
    switch (category) {
      case "Consulting":
        return <Briefcase className="size-4" />;
      case "Field":
        return <Wrench className="size-4" />;
      case "Eco-tourism":
        return <Leaf className="size-4" />;
    }
  };

  // Helper to match category with colors
  const getCategoryStyles = (category: Role["category"]) => {
    switch (category) {
      case "Consulting":
        return "bg-brand/10 text-brand border-brand/20 dark:bg-brand/20 dark:text-brand-soft";
      case "Field":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-300";
      case "Eco-tourism":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-300";
    }
  };

  return (
    <>
      {/* Premium Filter Controls */}
      <div className="mt-8 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.name}
            type="button"
            onClick={() => setFilter(f.name)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold border transition-all duration-300 shadow-sm cursor-pointer hover:scale-[1.03] ${
              filter === f.name
                ? "bg-brand-gradient text-brand-foreground border-brand hover:bg-brand-gradient-hover shadow-md shadow-brand/10"
                : "bg-card/75 backdrop-blur-md text-muted-foreground border-border hover:border-brand/40 hover:text-foreground dark:bg-card/40"
            }`}
          >
            {f.icon}
            {f.name}
          </button>
        ))}
      </div>

      {/* Career Timeline */}
      <div className="relative mt-12 pl-4 sm:pl-8">
        {/* Dynamic Gradient Connector Track */}
        <div className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand via-brand/60 to-highlight/30 dark:from-brand/40 dark:to-highlight/10" />

        <ol className="space-y-12">
          {visible.map((r, idx) => (
            <li key={r.company} className="relative group animate-in fade-in slide-in-from-bottom-6 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
              {/* Timeline Icon Node */}
              <span className="absolute -left-[10px] sm:-left-[14px] top-1.5 grid place-items-center size-9 sm:size-11 rounded-full bg-brand-gradient text-brand-foreground ring-4 ring-background shadow-md shadow-brand/5 dark:ring-background group-hover:scale-110 transition-transform duration-300">
                {getCategoryIcon(r.category)}
              </span>

              {/* Glassmorphic timeline card */}
              <div className="ml-8 sm:ml-10 rounded-2xl border border-border bg-card/65 backdrop-blur-md p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md dark:bg-card/45 dark:border-border/60 hover:shadow-brand/5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-2.5 shadow-sm leading-none bg-background/50 border-border/80">
                      <span className="size-1 rounded-full bg-brand animate-pulse" />
                      Role
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-brand transition-colors">
                      {r.title}
                    </h2>
                    
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 items-center text-sm font-semibold">
                      <span className="text-brand font-bold text-base">{r.company}</span>
                      <span className="text-muted-foreground flex items-center gap-1 text-xs">
                        <MapPin className="size-3.5" /> {r.location}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Tag Indicators */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold leading-none shadow-sm ${getCategoryStyles(r.category)}`}>
                      {r.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-highlight-soft border border-highlight/25 text-highlight-foreground px-3 py-1 text-xs font-bold shadow-sm dark:bg-highlight-soft/10">
                      <Calendar className="size-3.5" />
                      {r.period}
                    </span>
                  </div>
                </div>

                {/* Job Achievements bullets */}
                <ul className="mt-6 space-y-3.5 border-t border-border/60 pt-5">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 group/bullet">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand group-hover/bullet:scale-125 transition-transform duration-200" />
                      <span className="text-sm sm:text-base text-muted-foreground group-hover/bullet:text-foreground transition-colors duration-250 leading-relaxed font-medium">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

