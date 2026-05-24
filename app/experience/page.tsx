import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";

export const metadata = {
  title: "Experience — Farhan Ali",
  description: "Professional experience of Farhan Ali as an Environmental Specialist & Engineer.",
};

export default function ExperiencePage() {
  return (
    <section className="relative overflow-hidden z-0 min-h-[calc(100vh-4rem)]">
      {/* Dynamic Background Design */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_80%)]" />
      <div className="absolute top-20 left-0 sm:left-12 size-96 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-0 sm:right-12 size-96 rounded-full bg-highlight/15 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand dark:bg-brand-soft/20">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            My Journey
          </div>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            From the field to the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">boardroom.</span>
              <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 bg-highlight/70 dark:bg-highlight/60 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Four years of hands-on experience spanning corporate consulting, rigorous stack emission monitoring, and eco-friendly community development.
          </p>
        </div>

        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
