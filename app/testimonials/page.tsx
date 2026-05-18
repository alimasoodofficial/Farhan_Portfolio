import { Quote, Star } from "lucide-react";

export const metadata = {
  title: "Testimonials — Farhan Ali",
  description: "What clients across cement, petroleum, and textile industries say about working with Farhan.",
};

const testimonials = [
  {
    name: "Plant Manager",
    company: "Major Cement Producer",
    sector: "Cement",
    quote: "Farhan's stack monitoring reports were the cleanest we've received. Our regulator audit went through without a single follow-up question.",
  },
  {
    name: "HSE Lead",
    company: "Upstream Petroleum Operator",
    sector: "Petroleum",
    quote: "He genuinely understands the field. Calibrations, paperwork, regulator communication — all handled.",
  },
  {
    name: "Operations Director",
    company: "Integrated Textile Mill",
    sector: "Textile",
    quote: "We rebuilt our EMP with Farhan and it's actually being used on the floor. That's rare.",
  },
  {
    name: "Senior Engineer",
    company: "Hydropower Project",
    sector: "Hydropower",
    quote: "Reliable, methodical, and unflappable on long site campaigns.",
  },
  {
    name: "EHS Manager",
    company: "Automotive Assembler",
    sector: "Automotive",
    quote: "Turned a stack of fragmented data into a coherent compliance roadmap. Great communicator.",
  },
  {
    name: "Compliance Officer",
    company: "Tertiary Hospital",
    sector: "Healthcare",
    quote: "Brought a level of rigor to our environmental monitoring we hadn't seen before.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">Testimonials</div>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">Trusted across heavy industry.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Anonymised feedback from clients in cement, petroleum, textile, and beyond.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <figure
            key={t.quote}
            className={`relative rounded-3xl border border-border p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
              i % 5 === 0 ? "bg-brand text-brand-foreground border-brand" : "bg-card"
            }`}
          >
            <Quote className={`size-8 ${i % 5 === 0 ? "opacity-70" : "text-brand/60"}`} />
            <blockquote className={`mt-4 text-sm leading-relaxed ${i % 5 === 0 ? "opacity-95" : "text-foreground"}`}>
              "{t.quote}"
            </blockquote>
            <div className={`mt-5 flex items-center gap-1 ${i % 5 === 0 ? "text-highlight" : "text-highlight"}`}>
              {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="size-4 fill-current" />)}
            </div>
            <figcaption className="mt-4">
              <div className="font-semibold">{t.name}</div>
              <div className={`text-xs ${i % 5 === 0 ? "opacity-80" : "text-muted-foreground"}`}>
                {t.company} · {t.sector}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
