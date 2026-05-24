import Link from "next/link";
import { ArrowRight, HardHat, Factory, Flame, Layers, Compass } from "lucide-react";
import { PreviewableImage } from "@/components/sections/about/previewable-image";

export function ExperienceTeaser() {
  const sectors = [
    {
      icon: <Factory className="size-4.5 text-brand" />,
      title: "Steel & Metallurgy",
      desc: "Diagnostics on combustion furnaces and high-heat stack arrays."
    },
    {
      icon: <Layers className="size-4.5 text-highlight" />,
      title: "Cement & Clinker",
      desc: "Particulate PM matter sampling using high-volume filtration kit."
    },
    {
      icon: <Flame className="size-4.5 text-orange-500" />,
      title: "Power & Energy",
      desc: "EIA audits and operational permits on boilers and dryers."
    },
    {
      icon: <HardHat className="size-4.5 text-indigo-500" />,
      title: "Chemicals & Process",
      desc: "Chemical scrubbing diagnostics and process compliance reporting."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Narrative & Sectors (Left) */}
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5 rounded-md border border-brand/20 bg-brand-soft/60 dark:bg-brand-soft/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
            02. Field Operations
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            Heavy-industry auditing & compliance footprint.
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            I have managed emissions calibrations and compliance assessments across major sectors in both Saudi Arabia and Pakistan. My projects focus on standardizing diagnostic instrumentation outputs and guaranteeing green approvals.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {sectors.map((s) => (
              <div key={s.title} className="group/item flex items-start gap-3 rounded-2xl border border-border bg-card/45 p-4 shadow-sm hover:border-brand/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="size-8 grid place-items-center rounded-lg bg-brand-soft text-brand dark:bg-brand-soft/10 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-foreground">{s.title}</h5>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link 
              href="/experience" 
              className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3.5 text-xs font-bold text-foreground shadow-sm hover:border-brand/35 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md dark:bg-card/40"
            >
              Explore Experience Timeline <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Visual Frame (Right) */}
        <div className="lg:col-span-5 relative group order-1 lg:order-2">
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand/10 to-highlight/20 opacity-30 blur-2xl group-hover:scale-105 transition-transform duration-500 -z-10" />
          
          <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 shadow-xl hover:border-brand/40 transition-all duration-300">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
              <PreviewableImage
                src="/images/farhan-ali-website-15.webp"
                alt="Farhan Ali - stack diagnostics project operations"
                className="object-cover"
                sizes="(max-w-7xl) 40vw, 100vw"
              />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 text-white text-xs font-semibold flex items-center gap-2">
                <Compass className="size-4 text-brand" />
                <span>Auditing active stacks in Industrial Areas</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
