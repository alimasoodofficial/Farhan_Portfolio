import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <div className="mt-12 relative overflow-hidden rounded-3xl bg-highlight p-10 text-highlight-foreground shadow-xl">
      <div className="relative max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold">Not sure where to start?</h2>
        <p className="mt-2">Tell me about your facility and I'll suggest the right combination.</p>
        <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover px-5 py-3 text-sm font-semibold text-brand-foreground hover:scale-[1.03] transition shadow-md">
          Book a consultation <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
