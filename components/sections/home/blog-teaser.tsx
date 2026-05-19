import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../shared/section-heading";

export function BlogTeaser() {
  const blogs = [
    { tag: "Regulation", title: "Decoding Saudi NCEC compliance in 2025", date: "Coming soon" },
    { tag: "Tech", title: "BAM 1020 vs Thermo iQ — a field analyst's take", date: "Coming soon" },
    { tag: "Sustainability", title: "Lessons from solarizing a fluidized bed dryer", date: "Coming soon" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <SectionHeading
        eyebrow="From the field"
        title="Recent thoughts & notes"
        subtitle="Short reads on sustainability, regulations, and the kit I love using."
      />
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {blogs.map((b) => (
          <article key={b.title} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-[16/10] bg-brand-gradient relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-highlight px-2.5 py-1 text-[11px] font-semibold text-highlight-foreground">
                  {b.tag}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs text-muted-foreground">{b.date}</div>
              <div className="mt-1 font-semibold group-hover:text-brand transition-colors">{b.title}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/blogs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
          Read the blog <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
