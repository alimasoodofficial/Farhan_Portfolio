import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 sm:p-14 text-brand-foreground shadow-xl">
        <div className="absolute -top-20 -right-20 size-72 rounded-full bg-highlight/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Got an emission to measure or a permit to chase?</h2>
          <p className="mt-3 opacity-90">Tell me about your facility — let's keep your stacks clean and your regulators happy.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-highlight px-5 py-3 text-sm font-semibold text-highlight-foreground hover:scale-[1.03] transition">
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
