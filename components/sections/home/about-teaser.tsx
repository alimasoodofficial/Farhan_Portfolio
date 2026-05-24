import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, GraduationCap, Award } from "lucide-react";
import { PreviewableImage } from "@/components/sections/about/previewable-image";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Visual Highlight Frame (Left) */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand/10 to-highlight/20 opacity-30 blur-2xl group-hover:scale-105 transition-transform duration-500 -z-10" />
          
          <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 shadow-xl hover:border-brand/40 transition-all duration-300">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
              <PreviewableImage
                src="/images/farhan-ali-website-11.webp"
                alt="Farhan Ali - Operations and academic certifications"
                className="object-cover"
                sizes="(max-w-7xl) 40vw, 100vw"
              />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 text-white text-xs font-semibold flex items-center gap-2">
                <GraduationCap className="size-4 text-brand" />
                <span>NUST Environmental Engineer & Gold Medalist nominee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Skills (Right) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 rounded-md border border-brand/20 bg-brand-soft/60 dark:bg-brand-soft/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
            01. Specialist Profile
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            The engineer behind the <span className="text-brand">compliance certificates.</span>
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            I operate at the precise intersection of heavy process machinery, environmental sciences, and strict regulatory standards. I am dedicated to helping industrial plants achieve green targets, run air emission diagnostics, and implement clean environmental frameworks.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="group/item flex items-start gap-3 rounded-2xl border border-border bg-card/45 p-4 shadow-sm hover:border-brand/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="size-8 grid place-items-center rounded-lg bg-brand-soft text-brand dark:bg-brand-soft/10 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                <ShieldCheck className="size-4.5" />
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-foreground">Stack Compliance</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">National NEQS and NCEC guidelines.</p>
              </div>
            </div>

            <div className="group/item flex items-start gap-3 rounded-2xl border border-border bg-card/45 p-4 shadow-sm hover:border-brand/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="size-8 grid place-items-center rounded-lg bg-brand-soft text-brand dark:bg-brand-soft/10 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                <Award className="size-4.5" />
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-foreground">Academic Honors</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">High Honors and 1st prize accolades.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3.5 text-xs font-bold text-foreground shadow-sm hover:border-brand/35 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md dark:bg-card/40"
            >
              Read Full Biography <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
