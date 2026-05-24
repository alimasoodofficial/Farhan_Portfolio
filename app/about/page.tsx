import { Overview } from "@/components/sections/about/overview";
import { CV } from "@/components/sections/about/cv";
import { Tools } from "@/components/sections/about/tools";
import { Certs } from "@/components/sections/about/certs";
import Link from "next/link";
import { ArrowRight, UserCheck } from "lucide-react";

export const metadata = {
  title: "About — Farhan Ali",
  description: "Learn more about Farhan Ali, Environmental Specialist & Engineer.",
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-12 pb-24 z-0">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]" />
      <div className="absolute top-1/4 -left-48 size-96 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 size-96 rounded-full bg-highlight/15 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24 relative">
        {/* Header Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand dark:bg-brand-soft/10">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            About Farhan Ali
          </div>
          
          <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            The engineer behind the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">readings.</span>
              <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 bg-highlight/70 dark:bg-highlight/50 -z-10 rounded-sm" />
            </span>
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            I operate at the intersection of heavy machinery, precise data pipelines, and strict environmental compliance — ensuring industries run efficiently while protecting ambient air resources.
          </p>
        </div>

        {/* Modular Grid Sections */}
        <div className="grid gap-24">
          {/* Section 1: Narrative Biography */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/80 pb-4">
              <div className="text-xs font-black uppercase tracking-widest text-brand bg-brand-soft/60 dark:bg-brand-soft/15 px-3 py-1 rounded-md">01</div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                Overview & Background
              </h2>
            </div>
            <Overview />
          </section>

          {/* Section 2: Education & Sustainable Projects */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/80 pb-4">
              <div className="text-xs font-black uppercase tracking-widest text-brand bg-brand-soft/60 dark:bg-brand-soft/15 px-3 py-1 rounded-md">02</div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                Graduation & Honors
              </h2>
            </div>
            <CV />
          </section>

          {/* Section 3: Specialized Field Diagnostics */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/80 pb-4">
              <div className="text-xs font-black uppercase tracking-widest text-brand bg-brand-soft/60 dark:bg-brand-soft/15 px-3 py-1 rounded-md">03</div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                Equipment & Technology Stack
              </h2>
            </div>
            <Tools />
          </section>

          {/* Section 4: Certifications & Scholastic Output */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/80 pb-4">
              <div className="text-xs font-black uppercase tracking-widest text-brand bg-brand-soft/60 dark:bg-brand-soft/15 px-3 py-1 rounded-md">04</div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                Certifications & Publications
              </h2>
            </div>
            <Certs />
          </section>
        </div>

        {/* Interactive Action Footer */}
        <div className="pt-8 border-t border-border/60">
          <div className="rounded-3xl border border-border bg-card/65 backdrop-blur-md p-8 sm:p-10 flex flex-wrap items-center justify-between gap-6 dark:bg-card/45">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                Need field testing or a compliance audit?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Let's discuss how we can bring your operations fully in line with national emissions guidelines, perform stack measurements, or run diagnostic models.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-lg hover:bg-brand-hover hover:scale-[1.03] transition-all duration-300"
            >
              <UserCheck className="size-4" /> Start Consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

