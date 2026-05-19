import Link from "next/link";
import { ArrowRight, Wind, FlaskConical, Leaf, BookOpen } from "lucide-react";
import { SectionHeading } from "../shared/section-heading";

export function ServicesTeaser() {
  const services = [
    { icon: <Wind className="size-5" />, title: "Air Quality Monitoring", desc: "Stack emissions & ambient air — real instruments, real numbers." },
    { icon: <FlaskConical className="size-5" />, title: "EIA & IEE", desc: "Environmental & initial impact assessments done right." },
    { icon: <Leaf className="size-5" />, title: "NCEC / NEQS Audits", desc: "Stay on the right side of regulators in KSA & Pakistan." },
    { icon: <BookOpen className="size-5" />, title: "EMP & Permitting", desc: "Management plans that work on paper and in the field." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <SectionHeading
        eyebrow="What I do"
        title="From smokestacks to spreadsheets"
        subtitle="A handful of services that keep industries compliant and the air a little fresher."
      />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-border bg-card p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand/40">
            <div className="size-10 grid place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-brand-foreground">
              {s.icon}
            </div>
            <div className="mt-4 font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
          See all services <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
