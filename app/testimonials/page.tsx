import { TestimonialsGrid } from "@/components/sections/testimonials/testimonials-grid";

export const metadata = {
  title: "Testimonials — Farhan Ali",
  description: "What clients across cement, petroleum, and textile industries say about working with Farhan.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-8">
      <TestimonialsGrid />
    </div>
  );
}
