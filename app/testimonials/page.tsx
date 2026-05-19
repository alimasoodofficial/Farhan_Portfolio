import { TestimonialsGrid } from "@/components/sections/testimonials/testimonials-grid";

export const metadata = {
  title: "Testimonials — Farhan Ali",
  description: "What clients across cement, petroleum, and textile industries say about working with Farhan.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Testimonials</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Trusted across heavy industry.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Anonymised feedback from clients in cement, petroleum, textile, and beyond.
      </p>

      <TestimonialsGrid />
    </div>
  );
}
