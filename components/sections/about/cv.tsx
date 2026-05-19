import { GraduationCap, Award } from "lucide-react";

export function CV() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand">
            <GraduationCap className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-display text-lg font-bold">B.Sc. in Environmental Engineering</div>
            <div className="text-sm text-muted-foreground">University of Agriculture, Faisalabad</div>

            <div className="mt-5 rounded-xl bg-highlight-soft p-4 border border-highlight/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand">Final Year Project</div>
              <div className="mt-1 font-semibold">
                Solarization of Thermal Power Source of Fluidized Bed Dryer
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Designed and tested a flat-plate solar collector array that delivered a stable
                <span className="font-semibold text-foreground"> 70–80°C</span> thermal output to replace
                conventional fuel for fluidized bed drying — cutting emissions while keeping throughput steady.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
          <div className="size-11 grid place-items-center rounded-xl bg-highlight text-highlight-foreground">
            <Award className="size-5" />
          </div>
          <div>
            <div className="font-display text-lg font-bold">1st Prize — World Engineers Day</div>
            <div className="text-sm text-muted-foreground">
              National engineering competition recognising the solar dryer project for its real-world
              sustainability impact.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
