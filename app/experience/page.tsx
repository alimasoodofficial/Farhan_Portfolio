import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";

export const metadata = {
  title: "Experience — Farhan Ali",
  description: "Professional experience of Farhan Ali as an Environmental Specialist & Engineer.",
};

export default function ExperiencePage() {
  return (
    <section className="relative overflow-hidden z-0 min-h-[calc(100vh-4rem)] pb-16">
      {/* Dynamic Background Design */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-20 left-0 sm:left-12 size-96 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-0 sm:right-12 size-96 rounded-full bg-highlight/15 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 z-10">
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
