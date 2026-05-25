import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  { tag: "Regulation", title: "Decoding Saudi NCEC Compliance in 2025", excerpt: "What's changed, what hasn't, and the three things every industrial site should do this quarter.", date: "May 15, 2025", read: "6 min", slug: "decoding-saudi-ncec-compliance-2025" },
  { tag: "Tech", title: "BAM 1020 vs Thermo Scientific iQ — A Field Analyst's Take", excerpt: "When you'd reach for each instrument, and the small operational details that make or break a campaign.", date: "Apr 28, 2025", read: "8 min", slug: "bam-1020-vs-thermo-scientific-iq" },
  { tag: "Sustainability", title: "Solarizing Industrial Heat: Lessons from a Fluidized Bed Dryer", excerpt: "From flat-plate collectors to a stable 70–80°C output — what scaled and what didn't.", date: "Apr 10, 2025", read: "10 min", slug: "solarizing-industrial-heat" },
  { tag: "Cement", title: "Stack Testing for Cement Plants Without Halting Production", excerpt: "Planning, kit choice, and the conversations to have before the analyser leaves the office.", date: "Mar 19, 2025", read: "7 min", slug: "stack-testing-cement-plants" },
  { tag: "Policy", title: "NEQS vs PEQS: What Pakistan's Industrial Operators Should Actually Track", excerpt: "Cutting through acronyms to the metrics regulators care about.", date: "Feb 24, 2025", read: "5 min", slug: "neqs-vs-peqs" },
  { tag: "Career", title: "What I Wish I Knew Entering Environmental Consulting", excerpt: "Five lessons from four years of fieldwork and a lot of long drives.", date: "Jan 15, 2025", read: "6 min", slug: "entering-environmental-consulting" },
];

const colors = ["from-brand to-brand-dark", "from-highlight/90 to-brand", "from-brand-dark/80 to-brand"];

export function BlogsGrid() {
  return (
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((p, i) => (
        <Link
          key={p.title}
          href={`/blogs/${p.slug}`}
          className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand/40 duration-300"
        >
          <div className={`aspect-[16/10] relative bg-gradient-to-br ${colors[i % colors.length]}`}>
            <div className="absolute inset-0 bg-grid opacity-25" />
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-white/95 text-foreground px-3 py-1 text-[11px] font-semibold">
                {p.tag}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="size-3.5" /> {p.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> {p.read}</span>
              </div>
              <h2 className="mt-2 font-display text-lg font-bold group-hover:text-brand transition-colors text-balance">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1 line-clamp-3">{p.excerpt}</p>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand font-sans">
              Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
