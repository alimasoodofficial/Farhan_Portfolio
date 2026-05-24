import { PreviewableImage } from "./previewable-image";
import { Shield, Briefcase, CheckCircle, Calendar, Award, Check } from "lucide-react";

export function Overview() {
  return (
    <div className="space-y-8">
      {/* Top Row: Image & Narrative Biography */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Profile Image Column (Left) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 h-full shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
              <PreviewableImage
                src="/images/farhan-ali-website-1.webp"
                alt="Farhan Ali - Environmental Specialist"
                className="object-cover"
                sizes="(max-w-7xl) 40vw, 100vw"
                priority
              />
              {/* Glowing gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
              
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-brand-foreground shadow-md uppercase tracking-wider">
                  <Shield className="size-3" /> Certified NCEC Auditor
                </span>
              </div>
            </div>
            
            <div className="mt-4 p-2">
              <div className="text-sm font-bold text-foreground">Farhan Ali</div>
              <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <Briefcase className="size-3" /> Environmental Specialist & Engineer
              </div>
            </div>
          </div>
        </div>

        {/* Biography Column (Right) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 sm:p-8 shadow-sm hover:border-brand/35 hover:shadow-md transition-all duration-300 dark:bg-card/45">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-foreground flex items-center gap-2">
              Hi, I'm Farhan <span className="animate-bounce">👋</span>
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              I'm an <strong className="text-foreground font-semibold">Environmental Specialist & Engineer</strong> currently engineering sustainable solutions and audits in <strong className="text-foreground font-semibold">Saudi Arabia</strong>. My day-to-day work centers around stack emissions testing, ambient air-quality sensor networks, and maintaining industrial operations within tight regulatory frameworks.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              I bridge the gap between heavy industrial equipment and environmental regulation. I've designed and executed compliance solutions across crucial sectors, including cement, petroleum, automotive, hydropower, and large-scale healthcare facilities.
            </p>
          </div>
          
          <div className="mt-6 grid sm:grid-cols-2 gap-4 border-t border-border/60 pt-5">
            <div className="flex gap-2.5 items-start">
              <CheckCircle className="size-4.5 text-brand shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-foreground">Compliance First</div>
                <p className="text-xs text-muted-foreground mt-0.5">Strict adherence to NCEC (KSA) and NEQS/PEQS (Pakistan) standards.</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-start">
              <CheckCircle className="size-4.5 text-brand shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-foreground">Solar Engineering</div>
                <p className="text-xs text-muted-foreground mt-0.5">Innovator of thermodynamic power cycles & dry emissions abatement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Detailed Horizontal Stat Highlight Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {/* Card 1: Current Role */}
        <div className="rounded-2xl border border-border bg-card/65 backdrop-blur-md p-5 shadow-sm hover:border-brand/35 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between">
          <div>
            <div className="size-9 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10">
              <Briefcase className="size-4.5" />
            </div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-4">Current Position</div>
            <h4 className="font-bold text-sm sm:text-base text-foreground mt-1 leading-snug">Environmental Specialist</h4>
          </div>
          <div className="text-xs text-muted-foreground mt-2 border-t border-border/60 pt-2 font-medium">
            Renewable Environmental Company (REC), KSA
          </div>
        </div>

        {/* Card 2: Experience */}
        <div className="rounded-2xl border border-border bg-card/65 backdrop-blur-md p-5 shadow-sm hover:border-brand/35 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between">
          <div>
            <div className="size-9 grid place-items-center rounded-xl bg-highlight text-highlight-foreground">
              <Calendar className="size-4.5" />
            </div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-4">Professional Track</div>
            <h4 className="font-display text-lg sm:text-xl font-extrabold text-foreground mt-1 leading-snug">4+ Years Exp</h4>
          </div>
          <div className="text-xs text-muted-foreground mt-2 border-t border-border/60 pt-2">
            Heavy industrial compliance & air diagnostics
          </div>
        </div>

        {/* Card 3: Projects */}
        <div className="rounded-2xl border border-border bg-card/65 backdrop-blur-md p-5 shadow-sm hover:border-brand/35 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between">
          <div>
            <div className="size-9 grid place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Award className="size-4.5" />
            </div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-4">Audit History</div>
            <h4 className="font-display text-lg sm:text-xl font-extrabold text-foreground mt-1 leading-snug">20+ Industrial Projects</h4>
          </div>
          <div className="text-xs text-muted-foreground mt-2 border-t border-border/60 pt-2">
            Cement, petroleum, and automotive sectors
          </div>
        </div>

        {/* Card 4: Compliance Standard */}
        <div className="rounded-2xl border border-brand/20 bg-brand-soft/40 backdrop-blur-md p-5 shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 dark:bg-brand-soft/5 flex flex-col justify-between">
          <div>
            <div className="size-9 grid place-items-center rounded-xl bg-brand text-brand-foreground shadow-sm">
              <Shield className="size-4.5" />
            </div>
            <div className="text-[10px] font-bold text-brand uppercase tracking-wider mt-4">Regulatory Records</div>
            <h4 className="font-display text-lg sm:text-xl font-extrabold text-foreground mt-1 leading-snug">100% Compliance</h4>
          </div>
          <div className="text-xs text-brand/80 dark:text-brand-soft mt-2 border-t border-brand/20 pt-2 font-medium">
            Aligned with NCEC & NEQS protocols
          </div>
        </div>
      </div>
    </div>
  );
}


