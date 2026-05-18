import { ExternalLink, BookOpen, Calendar } from "lucide-react";

export const metadata = {
  title: "Research Articles — Farhan Ali",
  description: "Published research on industrial air pollution and control in Pakistan.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Research</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Published work.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Selected publications on air quality, industrial emissions, and hazardous waste management.
      </p>

      <article className="mt-10 group relative overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-brand to-brand/70 p-8 flex flex-col justify-between text-brand-foreground">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-highlight text-highlight-foreground px-3 py-1 text-xs font-semibold">
                <BookOpen className="size-3.5" /> Book chapter
              </div>
            </div>
            <div className="relative">
              <div className="font-display text-xl font-bold">Advances and Challenges in Hazardous Waste Management</div>
              <div className="text-sm opacity-80 mt-1">IntechOpen · 2024</div>
            </div>
          </div>
          <div className="md:col-span-3 p-8">
            <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" /> Published Jan 15, 2024
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-balance">
              Air Pollution from Industrial Emissions and Its Control in Pakistan: Current Situation, Challenges and Way Forward
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A focused look at the state of industrial emissions across Pakistan's key sectors — the
              regulatory gaps, monitoring realities on the ground, and the practical controls that can
              actually scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Air pollution", "Industrial emissions", "Pakistan", "Policy"].map((t) => (
                <span key={t} className="rounded-full bg-brand-soft text-brand px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://www.intechopen.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-all hover:scale-[1.03]"
              >
                Read on IntechOpen <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
