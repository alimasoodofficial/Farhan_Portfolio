import { ResearchList } from "@/components/sections/research/research-list";

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

      <ResearchList />
    </div>
  );
}
