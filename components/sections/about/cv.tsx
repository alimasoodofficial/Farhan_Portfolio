import { GraduationCap, Award, Calendar, CheckSquare, Settings, Flame, Check } from "lucide-react";
import { PreviewableImage } from "./previewable-image";

export function CV() {
  return (
    <div className="space-y-12">
      {/* University & Graduation Section */}
      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-7 flex flex-col justify-between rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 sm:p-8 shadow-sm hover:border-brand/35 hover:shadow-md transition-all duration-300 dark:bg-card/45">
          <div>
            <div className="flex items-center gap-3">
              <div className="size-12 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10">
                <GraduationCap className="size-6.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand">Academic Background</span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground mt-0.5">
                  B.Sc. in Environmental Engineering
                </h3>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 items-center text-sm font-semibold text-muted-foreground">
              <span>University of Agriculture, Faisalabad</span>
              <span className="inline-flex items-center gap-1 bg-muted px-2.5 py-0.5 rounded-full text-xs font-bold dark:bg-muted/30">
                <Calendar className="size-3" /> Graduated 2021
              </span>
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              Core training centered on sustainable engineering processes, industrial fluid mechanics, stack abatement engineering, and environmental toxicology. Graduated with honors, focusing on practical thermal conversion applications.
            </p>
          </div>

          {/* Final Year Engineering Project */}
          <div className="mt-8 rounded-2xl bg-brand-soft/40 border border-brand/20 p-5 dark:bg-brand-soft/5">
            <div className="text-xs font-bold uppercase tracking-wider text-brand flex items-center gap-1.5 border-b border-brand/10 pb-2">
              <Settings className="size-3.5" /> Capstone Project & Thesis
            </div>
            
            <div className="mt-3">
              <h4 className="font-bold text-foreground text-sm sm:text-base">
                Solarization of Thermal Power Source of Fluidized Bed Dryer
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Designed, modeled, and benchmarked a solar collector framework capable of supplying stable, clean heat to fluidized systems, offering a green alternative to conventional coal and gas sources.
              </p>
            </div>

            {/* Micro Stats Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-background/50 border border-border p-3 flex gap-2 items-center">
                <Flame className="size-5 text-amber-500 shrink-0" />
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase leading-none">Output Heat</div>
                  <div className="font-display text-sm font-black text-foreground mt-1">70°C – 80°C</div>
                </div>
              </div>
              <div className="rounded-xl bg-background/50 border border-border p-3 flex gap-2 items-center">
                <CheckSquare className="size-5 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase leading-none">Abatement</div>
                  <div className="font-display text-sm font-black text-foreground mt-1">Zero Emissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Lab Image Frame */}
        <div className="md:col-span-5 relative group min-h-[300px] md:min-h-auto">
          <div className="absolute inset-0 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 h-full shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <PreviewableImage
                src="/images/farhan-ali-website-27.webp"
                alt="University of Agriculture Engineering Lab - Thermodynamic & Air Sampling Station"
                className="object-cover"
                sizes="(max-w-7xl) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                <div className="text-xs font-bold uppercase tracking-wider opacity-85">Faisalabad Campus Labs</div>
                <div className="text-[10px] opacity-75 mt-0.5">Thermodynamic & Air Sampling Station</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Awards Section */}
      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        {/* Award Showcase Image */}
        <div className="md:col-span-5 relative group min-h-[260px] md:min-h-auto order-last md:order-first">
          <div className="absolute inset-0 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 h-full shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <PreviewableImage
                src="/images/farhan-ali-website-26.webp"
                alt="World Engineers Day 1st Prize Award - National Green Innovation Summit"
                className="object-cover"
                sizes="(max-w-7xl) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                <div className="text-xs font-bold uppercase tracking-wider opacity-85">Engineering Expo Showcase</div>
                <div className="text-[10px] opacity-75 mt-0.5">National Green Innovation Summit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Award Details card */}
        <div className="md:col-span-7 flex flex-col justify-between rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 sm:p-8 shadow-sm hover:border-brand/35 hover:shadow-md transition-all duration-300 dark:bg-card/45">
          <div>
            <div className="flex items-center gap-3">
              <div className="size-12 grid place-items-center rounded-xl bg-highlight text-highlight-foreground">
                <Award className="size-6.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">First Place Honor</span>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground mt-0.5">
                  1st Prize — World Engineers Day
                </h3>
              </div>
            </div>

            <p className="mt-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Awarded the prestigious top spot at the national engineering conference, honoring the capstone Fluidized Bed Solarization project. Recognized for demonstrating concrete thermodynamic efficiency gains alongside clean, zero-emissions potential.
            </p>

            <ul className="mt-6 space-y-3 border-t border-border/60 pt-5 text-xs sm:text-sm">
              <li className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-background/40 border border-border/40 text-muted-foreground transition-all duration-300 hover:border-brand/35 hover:text-foreground hover:bg-background/80 dark:bg-black/10 dark:border-white/5 dark:hover:bg-black/20 group/item">
                <div className="size-5 rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0 dark:bg-brand-soft/10 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                  <Check className="size-3.5" />
                </div>
                <span className="font-medium leading-tight">Reviewed and validated by a panel of international environmental consultants.</span>
              </li>
              <li className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-background/40 border border-border/40 text-muted-foreground transition-all duration-300 hover:border-brand/35 hover:text-foreground hover:bg-background/80 dark:bg-black/10 dark:border-white/5 dark:hover:bg-black/20 group/item">
                <div className="size-5 rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0 dark:bg-brand-soft/10 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                  <Check className="size-3.5" />
                </div>
                <span className="font-medium leading-tight">Exhibited live at the Green Engineering Expo, gaining regional industrial praise.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

