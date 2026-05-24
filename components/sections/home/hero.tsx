import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Shield, Cpu } from "lucide-react";
import TextType from "@/components/ui/TextType";
import { PreviewableImage } from "@/components/sections/about/previewable-image";

function Badge({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "highlight" | "muted" }) {
  const map = {
    brand: "bg-brand-soft text-brand border-brand/20 dark:bg-brand-soft/10",
    highlight: "bg-highlight-soft text-highlight-foreground border-highlight/30 dark:bg-highlight-soft/5",
    muted: "bg-muted text-muted-foreground border-border dark:bg-muted/10",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${map[tone]} transition-transform duration-200 hover:scale-[1.03]`}>
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden z-0 pt-8 pb-16">
      {/* Dynamic Backdrops */}
      <div className="absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -right-24 size-96 rounded-full bg-brand/20 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-highlight/30 blur-3xl -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-24 z-1">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text & Actions (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2.5">
              <Badge tone="brand"><MapPin className="size-3.5" /> Based in KSA</Badge>
              <Badge tone="highlight"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Consulting Active</Badge>
              <Badge tone="muted"><Cpu className="size-3.5" /> Environmental Specialist</Badge>
            </div>

            <h1 className="text-balance font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground tracking-tight">
              Engineering a Cleaner<br />
              <span className="relative inline-block my-1.5">
                <span className="relative z-10 text-brand">Greener</span>
                <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 bg-highlight/75 -z-10 rounded-sm" />
              </span>{" "}
              <TextType 
                text={["Tomorrow.", "Future.", "World."]} 
                textColors={["var(--brand)"]} 
                as="span" 
                className="text-brand inline-block" 
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2000}
                showCursor={true}
                cursorClassName="text-brand"
              />
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hey, I'm <strong className="font-bold text-foreground">Farhan Ali</strong> — an Environmental Specialist & Engineer engineering sustainable air compliance solutions, stack diagnostics, and regulatory data networks across heavy industrial sectors.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/experience" 
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-lg hover:bg-brand-hover hover:scale-[1.03] transition-all duration-300"
              >
                View My Work <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-6 py-3.5 text-sm font-bold text-foreground shadow-sm hover:border-brand/40 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md dark:bg-card/40"
              >
                Book a Consultation <Sparkles className="size-4 text-highlight transition-transform group-hover:rotate-12" />
              </Link>
            </div>
          </div>

          {/* Environmental Dashboard Visual Block (Right) */}
          <div className="lg:col-span-5 relative group hidden lg:block">
            {/* Glowing background */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand/10 to-highlight/20 opacity-40 blur-2xl group-hover:scale-105 transition-transform duration-500 -z-10" />
            
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 shadow-xl hover:border-brand/40 transition-all duration-300">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
                <PreviewableImage
                  src="/images/hero-1.webp"
                  alt="Farhan Ali - Field Environmental Specialist in Action"
                  className="object-cover"
                  sizes="(max-w-7xl) 40vw, 100vw"
                  priority
                />
                
                {/* Active Indicator Overlay */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Active Audits
                  </span>
                </div>

                {/* Stack Output Panel overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-neutral-900/85 backdrop-blur-lg border border-white/10 p-4 text-white shadow-lg">
                  <div className="text-[10px] font-black uppercase tracking-widest text-brand flex items-center gap-1">
                    <Shield className="size-3" /> Stack Monitoring Calibration
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[9px] text-white/50 uppercase font-semibold">NOx levels</div>
                      <div className="font-display text-sm font-extrabold text-white mt-0.5">84.2 mg/Nm³</div>
                      <div className="text-[8px] text-emerald-400 font-bold mt-0.5 flex items-center gap-0.5">
                        <span className="size-1 rounded-full bg-emerald-400" /> Compliant
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-white/50 uppercase font-semibold">Particulate PM</div>
                      <div className="font-display text-sm font-extrabold text-white mt-0.5">9.8 mg/Nm³</div>
                      <div className="text-[8px] text-emerald-400 font-bold mt-0.5 flex items-center gap-0.5">
                        <span className="size-1 rounded-full bg-emerald-400" /> PM10/PM2.5 Safe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
