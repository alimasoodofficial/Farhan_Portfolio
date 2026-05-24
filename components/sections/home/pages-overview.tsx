import Link from "next/link";
import { ArrowRight, UserCheck, Briefcase, Settings, FileText, Newspaper, Sparkles } from "lucide-react";
import { SectionHeading } from "../shared/section-heading";

export function PagesOverview() {
  const pages = [
    {
      num: "01",
      icon: <UserCheck className="size-5.5 text-brand" />,
      title: "About Farhan",
      desc: "Learn about my personal background, diagnostic equipment stack, specialized tools, and academic graduation honors.",
      link: "/about",
      label: "Read Bio"
    },
    {
      num: "02",
      icon: <Briefcase className="size-5.5 text-highlight" />,
      title: "Field Experience",
      desc: "Browse a detailed, chronological timeline of heavy industry audits, emissions testing, and compliance calibrations.",
      link: "/experience",
      label: "Explore Work"
    },
    {
      num: "03",
      icon: <Settings className="size-5.5 text-indigo-500" />,
      title: "Our Services",
      desc: "View specialized engineering solutions including Air Quality Monitoring, EIA, and NCEC/PEQS compliance audits.",
      link: "/services",
      label: "View Services"
    },
    {
      num: "04",
      icon: <FileText className="size-5.5 text-emerald-500" />,
      title: "Scholastic Research",
      desc: "Read scientific publications, book chapters on hazardous materials, and advanced air dispersion modeling outputs.",
      link: "/research",
      label: "Read Research"
    },
    {
      num: "05",
      icon: <Newspaper className="size-5.5 text-amber-500" />,
      title: "Field Journal (Blog)",
      desc: "Practical technical guides, instrument calibration breakdowns, and lessons learned from active industrial stack tests.",
      link: "/blogs",
      label: "Browse Journal"
    },
    {
      num: "06",
      icon: <Sparkles className="size-5.5 text-violet-500" />,
      title: "Contact & Consult",
      desc: "Inquire about customized stack auditing, environmental permit processing, or book a direct technical call.",
      link: "/contact",
      label: "Schedule Call"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative">
      {/* Visual background gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-brand/5 blur-3xl -z-10 pointer-events-none" />

      <SectionHeading
        eyebrow="Explore the Portal"
        title="Complete Site Directory"
        subtitle="Navigate through detailed sections mapping out professional services, academic chapters, and real-time field archives."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pages.map((p) => (
          <Link 
            key={p.title} 
            href={p.link}
            className="group rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between"
          >
            <div>
              {/* Header Row */}
              <div className="flex justify-between items-center">
                <div className="size-11 grid place-items-center rounded-xl bg-muted/65 dark:bg-muted/10 border border-border/40 group-hover:scale-105 transition-transform duration-300">
                  {p.icon}
                </div>
                <span className="text-[10px] font-black tracking-widest text-muted-foreground bg-muted/60 dark:bg-muted/15 px-2.5 py-1 rounded-md">
                  PAGE {p.num}
                </span>
              </div>

              {/* Title & Desc */}
              <h4 className="mt-5 font-bold text-base text-foreground leading-snug group-hover:text-brand transition-colors duration-300">
                {p.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>

            {/* Link Footer */}
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-bold text-brand group-hover:text-brand-hover">
              {p.label} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
