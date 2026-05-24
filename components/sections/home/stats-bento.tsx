import { Briefcase, Wind, BookOpen, FlaskConical, Award, ShieldCheck } from "lucide-react";

export function StatsBento() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        
        {/* Years of Exp Card (Brand Spotlight) */}
        <div className="md:col-span-3 rounded-3xl bg-brand-gradient text-brand-foreground p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group min-h-[220px]">
          <div className="absolute -top-12 -left-12 size-36 rounded-full bg-white/5 blur-xl group-hover:scale-110 transition-transform duration-500" />
          <div className="size-11 grid place-items-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
            <Briefcase className="size-5.5 text-white" />
          </div>
          <div>
            <div className="font-display text-5xl sm:text-6xl font-black tracking-tight leading-none">4+ Years</div>
            <div className="mt-2 text-sm font-semibold opacity-90 uppercase tracking-widest">Experience in Stack Compliance</div>
          </div>
        </div>

        {/* Industrial Projects Managed Card (Highlight Spotlight) */}
        <div className="md:col-span-3 rounded-3xl bg-highlight text-highlight-foreground p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group min-h-[220px]">
          <div className="absolute -top-12 -right-12 size-36 rounded-full bg-white/5 blur-xl group-hover:scale-110 transition-transform duration-500" />
          <div className="size-11 grid place-items-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
            <Wind className="size-5.5 text-white" />
          </div>
          <div>
            <div className="font-display text-5xl sm:text-6xl font-black tracking-tight leading-none">20+ Projects</div>
            <div className="mt-2 text-sm font-semibold opacity-90 uppercase tracking-widest">Industrial Air Compliance Audits</div>
          </div>
        </div>

        {/* Published Chapter (Glassmorphic Muted) */}
        <div className="md:col-span-2 rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between min-h-[160px] group">
          <div className="size-10 grid place-items-center rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
            <BookOpen className="size-5" />
          </div>
          <div className="mt-6">
            <div className="font-display text-3xl font-extrabold text-foreground leading-none">1 Published</div>
            <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Book Chapter (Hazardous Waste)</div>
          </div>
        </div>

        {/* Sectors (Glassmorphic Muted) */}
        <div className="md:col-span-2 rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between min-h-[160px] group">
          <div className="size-10 grid place-items-center rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
            <FlaskConical className="size-5" />
          </div>
          <div className="mt-6">
            <div className="font-display text-3xl font-extrabold text-foreground leading-none">6+ Sectors</div>
            <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Industrial Auditing Expertise</div>
          </div>
        </div>

        {/* Engineers Day (Glassmorphic Muted) */}
        <div className="md:col-span-2 rounded-3xl border border-brand/20 bg-brand-soft/40 backdrop-blur-md p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 dark:bg-brand-soft/5 flex flex-col justify-between min-h-[160px] group">
          <div className="size-10 grid place-items-center rounded-xl bg-brand text-brand-foreground shadow-sm group-hover:bg-highlight group-hover:text-highlight-foreground transition-colors duration-300">
            <Award className="size-5" />
          </div>
          <div className="mt-6">
            <div className="font-display text-3xl font-extrabold text-foreground leading-none">1st Prize</div>
            <div className="mt-1 text-xs text-brand font-bold uppercase tracking-wider dark:text-brand-soft">World Engineers Day summit</div>
          </div>
        </div>

      </div>
    </section>
  );
}

