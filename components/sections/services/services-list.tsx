"use client";

import Link from "next/link";
import { Wind, FlaskConical, ShieldCheck, ClipboardList, ArrowRight } from "lucide-react";
import { PreviewableImage } from "@/components/sections/about/previewable-image";

const services = [
  {
    slug: "stack-emissions-ambient-air-monitoring",
    title: "Stack Emissions & Ambient Air Quality Monitoring",
    desc: "End-to-end air monitoring using BAM 1020, Thermo Scientific iQ and other field-proven kit. Sampling, lab coordination, and reporting.",
    longDesc: "Providing high-fidelity Point Source (Stack) Emissions and Ambient Air Quality testing. We ensure calibrated diagnostic checks, direct NCEC digital integration, and standard EPA-conforming monitoring networks to validate industrial air compliance.",
    perks: ["Calibrated equipment", "On-site analyst", "Regulator-ready reports"],
    icon: Wind,
    image: "/images/farhan-ali-website-27.webp",
    impact: "100% Telemetry Success",
    color: "from-blue-500/10 to-brand/10",
  },
  {
    slug: "eia-iee",
    title: "Environmental Impact Assessments & IEE",
    desc: "Environmental Impact Assessments and Initial Environmental Examinations — from screening to public consultation to final agency filing.",
    longDesc: "Guiding new and expanding facilities through complete Initial Environmental Examinations (IEE) and Environmental Impact Assessments (EIA). From comprehensive baseline modeling to stakeholder consultations, we secure your operational clearance.",
    perks: ["Baseline studies", "Mitigation planning", "Agency submission"],
    icon: FlaskConical,
    image: "/images/farhan-ali-website-11.webp",
    impact: "20+ Megaprojects Cleared",
    color: "from-brand/10 to-highlight/10",
  },
  {
    slug: "ncec-neqs-compliance-audits",
    title: "NCEC & NEQS Compliance Audits",
    desc: "Independent audits against Saudi NCEC and Pakistan NEQS frameworks with clear, prioritised corrective action plans.",
    longDesc: "Rigorous evaluations mapping facility processes against Saudi Arabia's NCEC and Pakistan's NEQS regulations. We identify operational gaps and deliver a highly prioritized, cost-effective engineering roadmap for long-term compliance.",
    perks: ["Gap analysis", "Action roadmap", "Re-audit support"],
    icon: ShieldCheck,
    image: "/images/farhan-ali-website-13.webp",
    impact: "Zero Shutdowns Guaranteed",
    color: "from-emerald-500/10 to-brand/10",
  },
  {
    slug: "emp-permitting",
    title: "EMP & Permitting",
    desc: "Environmental Management Plans that actually get used. Permit applications, renewals, and ongoing regulator liaison.",
    longDesc: "Developing actionable Environmental Management Plans (EMP) integrated directly into daily operations. We navigate the complete regulatory pathway to secure and renew your environmental permits and operations licenses.",
    perks: ["Tailored to your site", "Trackable KPIs", "Renewal calendar"],
    icon: ClipboardList,
    image: "/images/farhan-ali-website-21.webp",
    impact: "100% Renewal Clearance",
    color: "from-highlight/10 to-emerald-500/10",
  },
];

export function ServicesList() {
  return (
    <div className="mt-16 space-y-16 lg:space-y-24">
      {services.map((s, index) => {
        const Icon = s.icon;
        const isEven = index % 2 === 0;

        return (
          <div 
            key={s.slug} 
            className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card/45 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl hover:border-brand/35 transition-all duration-300 dark:bg-card/30"
          >
            {/* Soft decorative background gradient blur */}
            <div className={`absolute top-0 -right-20 -left-20 h-40 bg-gradient-to-b ${s.color} blur-3xl opacity-60 pointer-events-none`} />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Image Section - Alternates order on desktop */}
              <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border shadow-md bg-muted">
                  <PreviewableImage 
                    src={s.image} 
                    alt={s.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-w-7xl) 35vw, 100vw"
                  />
                  {/* Glassmorphic Impact Badge on top of image */}
                  <div className="absolute top-4 left-4 z-20 rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 px-3.5 py-2 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {s.impact}
                  </div>
                  {/* Subtle Gradient Shadow at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text & Content Section */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                
                {/* Icon and Tag Line */}
                <div className="flex items-center gap-3">
                  <div className="size-11 grid place-items-center rounded-xl bg-brand-gradient text-brand-foreground shadow-sm">
                    <Icon className="size-5.5" />
                  </div>
                  <div className="h-6 w-px bg-border/80" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                    Service 0{index + 1}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  {s.title}
                </h2>

                {/* Description */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-normal">
                    {s.longDesc}
                  </p>
                </div>

                {/* Quick Perks / Subtopics list */}
                <ul className="flex flex-wrap gap-2.5 pt-1">
                  {s.perks.map((p) => (
                    <li 
                      key={p} 
                      className="rounded-lg bg-brand-soft/70 px-3 py-1.5 text-xs font-bold text-brand border border-brand/10 dark:bg-brand/10"
                    >
                      ✓ {p}
                    </li>
                  ))}
                </ul>

                {/* Action CTA Button */}
                <div className="pt-4">
                  <Link 
                    href={`/services/${s.slug}`} 
                    className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-bold text-brand-foreground hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md group/btn"
                  >
                    Explore Service Overview
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
