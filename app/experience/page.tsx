import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";

export const metadata = {
  title: "Experience — Farhan Ali",
  description: "Professional experience of Farhan Ali as an Environmental Specialist & Engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Career</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">From the field to the boardroom.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Four years across consulting, hands-on monitoring, and sustainable tourism.
      </p>

      <ExperienceTimeline />
    </div>
  );
}
