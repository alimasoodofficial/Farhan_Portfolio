import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import TextType from "@/components/ui/TextType";

function Badge({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "highlight" | "muted" }) {
  const map = {
    brand: "bg-brand-soft text-brand border-brand/20",
    highlight: "bg-highlight-soft text-highlight-foreground border-highlight/30",
    muted: "bg-muted text-muted-foreground border-border",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -right-24 size-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-highlight/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge tone="brand"><MapPin className="size-3.5" /> Based in Saudi Arabia</Badge>
          <Badge tone="highlight"><span className="size-1.5 rounded-full bg-green-600 animate-pulse" /> Open to consulting</Badge>
          <Badge tone="muted"><Sparkles className="size-3.5" /> 4+ years experience</Badge>
        </div>

        <h1 className="text-balance font-display text-3xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground">
          <span className="text-brand">Engineering </span> a Cleaner<br className="" />
          <span className="relative inline-block">
            <span className="relative z-10">Greener</span>
            <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 bg-highlight/70 -z-0 rounded-sm" />
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

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Hey, I'm <span className="font-semibold text-foreground">Farhan Ali</span> — an Environmental Specialist
          & Engineer obsessed with smokestacks, sensors, and squeaky-clean compliance reports.
          I help heavy industries breathe easier (literally).
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/experience" className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover px-5 py-3 text-sm font-semibold text-brand-foreground shadow-md transition-all hover:scale-[1.03] hover:shadow-lg">
            View My Work <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-highlight px-5 py-3 text-sm font-semibold text-highlight-foreground shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
            Book a Consultation <Sparkles className="size-4 transition-transform group-hover:rotate-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
