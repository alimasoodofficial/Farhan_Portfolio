import Link from "next/link";
import { ArrowRight, ShieldCheck, GraduationCap, Award, Flame, BookOpen, Briefcase, MapPin } from "lucide-react";
import { PreviewableImage } from "@/components/sections/about/previewable-image";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 size-72 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 size-72 rounded-full bg-highlight/10 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Visual Highlight Frames (Left Column - Col span 5) */}
        <div className="lg:col-span-5 space-y-6 relative">
          
          {/* Main Visual Profile */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand/10 to-highlight/20 opacity-30 blur-2xl group-hover:scale-105 transition-transform duration-500 -z-10" />
            
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 shadow-xl hover:border-brand/40 transition-all duration-300">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
                <PreviewableImage
                  src="/images/farhan-ali-website-11.webp"
                  alt="Farhan Ali - Operations and academic certifications"
                  className="object-cover"
                  sizes="(max-w-7xl) 40vw, 100vw"
                />
                
                {/* Floating ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 text-white text-xs font-semibold flex items-center gap-2">
                  <GraduationCap className="size-4.5 text-brand shrink-0" />
                  <span className="leading-tight">NUST Environmental Engineer & Gold Medalist Nominee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Overlapping Lab/Field Action Frame */}
          <div className="relative ml-8 -mt-10 sm:-mt-16 group z-20 max-w-[85%] self-end">
            <div className="relative rounded-2xl border border-border bg-card/85 backdrop-blur-md p-2 shadow-lg hover:border-brand/40 transition-all duration-300 dark:bg-card/70">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <PreviewableImage
                  src="/images/farhan-ali-website-27.webp"
                  alt="University of Agriculture Engineering Lab"
                  className="object-cover"
                  sizes="(max-w-7xl) 30vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white z-20 flex items-center justify-between">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">UAF Thermodynamics Lab</div>
                  <span className="text-[9px] bg-brand px-2 py-0.5 rounded-full font-bold">Diagnostics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Quick Compliance Badge */}
          <div className="absolute -right-2 top-8 z-30 rounded-2xl bg-brand text-brand-foreground px-4 py-3 shadow-lg border border-brand/20 hover:scale-105 transition-transform duration-300 hidden sm:flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-white/20 flex items-center justify-center">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest leading-none opacity-80">Certified Auditor</div>
              <div className="font-display font-black text-sm mt-0.5 leading-none">100% NCEC Compliant</div>
            </div>
          </div>

        </div>

        {/* Narrative & Deep-Dive Cherry-Picked Details (Right Column - Col span 7) */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5 rounded-md border border-brand/20 bg-brand-soft/60 dark:bg-brand-soft/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
              01. Specialization & Biography
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Engineering sustainability at the core of <span className="text-brand">heavy industry.</span>
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I operate at the precise intersection of thermodynamic engineering, emission diagnostics, and strict regulatory auditing. By bridging academic innovation with field compliance, I keep major industrial plants operational while protecting ambient air resources.
            </p>
          </div>

          {/* Expanded Cherry-Picked Details (Cards Stack) */}
          <div className="space-y-4">
            
            {/* Card 1: Academic Pedigree & Capstone Innovation */}
            <div className="group/item flex flex-col md:flex-row gap-4 p-5 rounded-2xl border border-border bg-card/45 shadow-sm hover:border-brand/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10 shrink-0 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                <GraduationCap className="size-5.5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-foreground">B.Sc. Environmental Engineering (Honors)</h4>
                  <span className="inline-flex items-center gap-0.5 bg-muted px-2 py-0.5 rounded-full text-[10px] font-bold text-muted-foreground dark:bg-muted/30">
                    <MapPin className="size-2.5 text-brand" /> UAF & NUST
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Graduated with high honors as a Gold Medalist Nominee. Engineered a groundbreaking capstone thesis on the <strong className="text-foreground font-semibold">"Solarization of Fluidized Bed Dryers"</strong>, successfully developing a thermodynamic system that delivers <span className="text-brand font-bold">70°C–80°C</span> clean heat with <strong className="text-foreground font-semibold">zero carbon emissions</strong>.
                </p>
              </div>
            </div>

            {/* Card 2: Industrial Compliance & KSA Track */}
            <div className="group/item flex flex-col md:flex-row gap-4 p-5 rounded-2xl border border-border bg-card/45 shadow-sm hover:border-brand/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10 shrink-0 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                <Briefcase className="size-5.5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-foreground">Environmental Specialist & NCEC Auditor</h4>
                  <span className="inline-flex items-center gap-0.5 bg-brand-soft/60 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-brand dark:bg-brand-soft/10 border border-brand/10">
                    Active in Saudi Arabia
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Directing complex compliance audits at the <strong className="text-foreground font-semibold">Renewable Environmental Company (REC)</strong> in KSA. Expert in Saudi Arabia’s National Center for Environmental Compliance (NCEC) frameworks, managing 20+ mega-scale projects across cement, petroleum, automotive, and power grids.
                </p>
              </div>
            </div>

            {/* Card 3: Scholastic honors & Publications */}
            <div className="group/item flex flex-col md:flex-row gap-4 p-5 rounded-2xl border border-border bg-card/45 shadow-sm hover:border-brand/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10 shrink-0 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                <BookOpen className="size-5.5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-sm sm:text-base text-foreground">Scientific Co-Author & 1st Prize Winner</h4>
                  <span className="inline-flex items-center gap-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    World Engineers Day
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Co-authored a technical book chapter on industrial toxicology in <em className="text-foreground">Advances and Challenges in Hazardous Waste Management</em> (Scientific Press). Won 1st Prize at the National Green Innovation Summit for clean emissions advancements.
                </p>
              </div>
            </div>

          </div>

          {/* Technical Specialties Pills Grid */}
          <div className="pt-2">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Technical Specialties</div>
            <div className="flex flex-wrap gap-2">
              {[
                "Stack Emissions Audits",
                "NCEC & NEQS Protocols",
                "Solar Collectors",
                "Fluidized Thermodynamics",
                "Hazardous Waste Toxicology",
                "Air Dispersion Diagnostics"
              ].map((pill) => (
                <span 
                  key={pill} 
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-3 py-1.5 text-xs font-semibold text-foreground dark:bg-black/10 dark:border-white/5 transition-all duration-200 hover:border-brand/40 hover:-translate-y-0.5"
                >
                  <div className="size-1.5 rounded-full bg-brand" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-4 text-xs font-bold text-brand-foreground shadow-lg hover:bg-brand-hover hover:scale-[1.03] transition-all duration-300"
            >
              Read Full Biography & Career Timeline 
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-4 text-xs font-bold text-foreground shadow-sm hover:border-brand/35 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md dark:bg-card/40"
            >
              Start Consultation
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
