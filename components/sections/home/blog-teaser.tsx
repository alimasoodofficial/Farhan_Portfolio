import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { SectionHeading } from "../shared/section-heading";
import { PreviewableImage } from "@/components/sections/about/previewable-image";

export function BlogTeaser() {
  const blogs = [
    { 
      tag: "Regulation", 
      title: "Decoding Saudi NCEC compliance in 2025", 
      date: "Compliance Update",
      img: "/images/farhan-ali-website-27.webp",
      slug: "decoding-saudi-ncec-compliance-2025"
    },
    { 
      tag: "Instrumentation", 
      title: "BAM 1020 vs Thermo iQ — a field analyst's take", 
      date: "Instrument Review",
      img: "/images/farhan-ali-website-10.webp",
      slug: "bam-1020-vs-thermo-scientific-iq"
    },
    { 
      tag: "Sustainability", 
      title: "Lessons from solarizing a fluidized bed dryer", 
      date: "Engineering Case Study",
      img: "/images/farhan-ali-website-20.webp",
      slug: "solarizing-industrial-heat"
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <SectionHeading
        eyebrow="From the field"
        title="Recent insights & case files"
        subtitle="Operational reports, diagnostic instrument breakdowns, and sustainability engineering notes straight from active plants."
      />
      
      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {blogs.map((b) => (
          <Link 
            key={b.title} 
            href={`/blogs/${b.slug}`}
            className="group rounded-3xl overflow-hidden border border-border bg-card/65 backdrop-blur-md shadow-sm hover:border-brand/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col h-full"
          >
            {/* Visual Header */}
            <div className="aspect-[16/10] relative overflow-hidden w-full">
              <PreviewableImage
                src={b.img}
                alt={b.title}
                className="object-cover"
                sizes="(max-w-7xl) 33vw, 100vw"
              />
              
              <div className="absolute top-3 left-3 z-20">
                <span className="rounded-lg bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand border border-white/10">
                  {b.tag}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-brand uppercase tracking-wider">
                  <Clock className="size-3" /> {b.date}
                </div>
                <h4 className="mt-2.5 font-bold text-base text-foreground leading-snug group-hover:text-brand transition-colors duration-300">
                  {b.title}
                </h4>
              </div>
              
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Read Publication Report <ArrowRight className="size-3.5 text-brand transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:justify-start">
        <Link 
          href="/blogs" 
          className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3 text-xs font-bold text-foreground shadow-sm hover:border-brand/35 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md dark:bg-card/40"
        >
          Explore Full Research Archives <BookOpen className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

