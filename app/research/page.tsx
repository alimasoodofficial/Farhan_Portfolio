import { ResearchList } from "@/components/sections/research/research-list";

export const metadata = {
  title: "Research Articles — Farhan Ali",
  description: "Published research on industrial air pollution and control in Pakistan.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 pt-8">
      <ResearchList />
    </div>
  );
}
