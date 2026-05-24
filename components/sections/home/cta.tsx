import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28">
      <div className="relative overflow-hidden rounded-[32px] bg-brand-gradient p-10 sm:p-14 text-brand-foreground shadow-2xl group border border-white/15">
        {/* Glow Spheres */}
        <div className="absolute -top-24 -right-24 size-80 rounded-full bg-highlight/40 blur-3xl group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-white/10 blur-3xl" />
        
        <div className="relative max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/10">
            <Sparkles className="size-3.5 text-highlight" /> Active Consultations
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Got an emission to measure or a permit to secure?
          </h2>
          
          <p className="text-sm sm:text-base opacity-90 leading-relaxed max-w-xl">
            Tell me about your industrial facility or auditing project. Let's make sure your operations are fully compliant, your regulators are happy, and your stacks run at optimal efficiency.
          </p>
          
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-2 rounded-xl bg-highlight px-6 py-3.5 text-sm font-bold text-highlight-foreground shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <MessageSquare className="size-4" /> Start Consultation <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

