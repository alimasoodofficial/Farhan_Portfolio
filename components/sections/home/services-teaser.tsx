import Link from "next/link";
import { ArrowRight, Wind, FlaskConical, Leaf, BookOpen } from "lucide-react";
import { SectionHeading } from "../shared/section-heading";

export function ServicesTeaser() {
  const services = [
    { 
      icon: <Wind className="size-5.5" />, 
      title: "Air Quality Monitoring", 
      desc: "Stack emissions & ambient air testing using certified high-temperature instruments and sensor arrays." 
    },
    { 
      icon: <FlaskConical className="size-5.5" />, 
      title: "EIA & IEE Assessments", 
      desc: "Comprehensive Environmental and Initial Environmental Impact assessments done to rigorous standards." 
    },
    { 
      icon: <Leaf className="size-5.5" />, 
      title: "NCEC & PEQS Audits", 
      desc: "Complete operational audits protecting heavy industries from regulator non-compliance penalties." 
    },
    { 
      icon: <BookOpen className="size-5.5" />, 
      title: "EMP & Permitting Plans", 
      desc: "Actionable environmental management plans and permit processing designed for clean operations." 
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <SectionHeading
        eyebrow="What I do"
        title="From smokestacks to compliance pipelines"
        subtitle="A targeted suite of specialized engineering services keeping facilities fully operational and green."
      />
      
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div 
            key={s.title} 
            className="group rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col justify-between"
          >
            <div>
              <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10 group-hover:bg-brand group-hover:text-brand-foreground transition-all duration-300">
                {s.icon}
              </div>
              <h4 className="mt-5 font-bold text-base text-foreground leading-snug">{s.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            
            <div className="mt-4 border-t border-border/60 pt-4 flex items-center gap-1 text-xs font-bold text-brand group-hover:text-brand-hover">
              Specialized Service <span className="animate-pulse">●</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:justify-start">
        <Link 
          href="/services" 
          className="group inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3 text-xs font-bold text-foreground shadow-sm hover:border-brand/35 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md dark:bg-card/40"
        >
          See All Specialized Services <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

