import { Activity, Wrench, Shield, Database, Cpu, Check } from "lucide-react";
import { PreviewableImage } from "./previewable-image";

export function Tools() {
  const categories = [
    {
      title: "Emission Testing Equipment",
      icon: <Activity className="size-5 text-brand" />,
      items: [
        "Isokinetic Stack Sampler (Method 5 & 17)",
        "Flue Gas Analyzers (Testo 350 for O2/CO/NOx)",
        "VOCs & Hydrocarbon Gas Detectors",
        "Opacity & Dust Density Monitors"
      ]
    },
    {
      title: "Ambient Monitoring Systems",
      icon: <Cpu className="size-5 text-highlight" />,
      items: [
        "High-Volume Air Samplers (TSP/PM10)",
        "Real-time Ambient Air Stations (SOx/NOx)",
        "Noise Level Calibrated Dosimeters",
        "Meteorological Weather Sensors"
      ]
    },
    {
      title: "Engineering Software & Methods",
      icon: <Database className="size-5 text-emerald-500" />,
      items: [
        "AERMOD View - Air Dispersion Modeling",
        "Industrial Ventilation Systems Design",
        "Thermodynamic Solar Collector Modeling",
        "NCEC Audit & Compliance Checklists"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-12 gap-8 items-stretch">
      {/* Visual Image representing field equipment */}
      <div className="md:col-span-5 relative group min-h-[300px] md:min-h-auto">
        <div className="absolute inset-0 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 h-full shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <PreviewableImage
              src="/images/farhan-ali-website-10.webp"
              alt="Environmental Stack Monitoring Tools in Action - High-Temperature Probe Calibration"
              className="object-cover"
              sizes="(max-w-7xl) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white z-20">
              <div className="text-xs font-bold uppercase tracking-wider opacity-85">Stack Sampling Array</div>
              <div className="text-[10px] opacity-75 mt-0.5">High-Temperature Probe Calibration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment details columns */}
      <div className="md:col-span-7 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Wrench className="size-5 text-brand" />
            <h3 className="font-display text-lg font-bold text-foreground">Field Diagnostics & Tech Stack</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Running precise industrial environmental audits requires highly calibrated hardware and modeling algorithms. I operate and maintain the standard stack probe lines, flue gas analyzers, and dispersion software to ensure every Reading is exact and defensible.
          </p>
        </div>

        <div className="grid gap-4">
          {categories.map((c, i) => (
            <div key={i} className="rounded-2xl border border-border/80 bg-card/45 p-5 shadow-sm transition-all duration-300 hover:border-brand/25 dark:bg-card/25">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-background border border-border">
                  {c.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-foreground">{c.title}</h4>
              </div>
              
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {c.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-background/40 border border-border/40 text-muted-foreground transition-all duration-300 hover:border-brand/35 hover:text-foreground hover:bg-background/80 dark:bg-black/10 dark:border-white/5 dark:hover:bg-black/20 group/item"
                  >
                    <div className="size-5 rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0 dark:bg-brand-soft/10 group-hover/item:bg-brand group-hover/item:text-brand-foreground transition-all duration-300">
                      <Check className="size-3.5" />
                    </div>
                    <span className="font-medium text-xs leading-tight sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

