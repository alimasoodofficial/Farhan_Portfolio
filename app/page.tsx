import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Wind, FlaskConical, BookOpen, Briefcase, Award, Leaf } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="absolute -top-32 -right-24 size-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-highlight/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge tone="brand"><MapPin className="size-3.5" /> Based in Saudi Arabia</Badge>
            <Badge tone="highlight"><span className="size-1.5 rounded-full bg-green-600 animate-pulse" /> Open to consulting</Badge>
            <Badge tone="muted"><Sparkles className="size-3.5" /> 4+ years experience</Badge>
          </div>

          <h1 className="text-balance font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground">
            Engineering a <span className="text-brand">Cleaner</span>,<br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="relative z-10">Greener</span>
              <span className="absolute inset-x-0 bottom-1 h-3 sm:h-4 bg-highlight/70 -z-0 rounded-sm" />
            </span>{" "}
            Tomorrow.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Hey, I'm <span className="font-semibold text-foreground">Farhan Ali</span> — an Environmental Specialist
            & Engineer obsessed with smokestacks, sensors, and squeaky-clean compliance reports.
            I help heavy industries breathe easier (literally).
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/experience" className="group inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
              View My Work <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-highlight px-5 py-3 text-sm font-semibold text-highlight-foreground shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg">
              Book a Consultation <Sparkles className="size-4 transition-transform group-hover:rotate-12" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BENTO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <StatCard className="md:col-span-3" icon={<Briefcase className="size-5" />} value="4+" label="Years of Experience" tone="brand" big />
          <StatCard className="md:col-span-3" icon={<Wind className="size-5" />} value="20+" label="Industrial Projects Managed" tone="highlight" big />
          <StatCard className="md:col-span-2" icon={<BookOpen className="size-5" />} value="1" label="Published Book Chapter" tone="muted" />
          <StatCard className="md:col-span-2" icon={<FlaskConical className="size-5" />} value="6+" label="Heavy-Industry Sectors" tone="muted" />
          <StatCard className="md:col-span-2" icon={<Award className="size-5" />} value="1st" label="World Engineers Day Award" tone="muted" />
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <SectionHeading
          eyebrow="What I do"
          title="From smokestacks to spreadsheets"
          subtitle="A handful of services that keep industries compliant and the air a little fresher."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Wind className="size-5" />, title: "Air Quality Monitoring", desc: "Stack emissions & ambient air — real instruments, real numbers." },
            { icon: <FlaskConical className="size-5" />, title: "EIA & IEE", desc: "Environmental & initial impact assessments done right." },
            { icon: <Leaf className="size-5" />, title: "NCEC / NEQS Audits", desc: "Stay on the right side of regulators in KSA & Pakistan." },
            { icon: <BookOpen className="size-5" />, title: "EMP & Permitting", desc: "Management plans that work on paper and in the field." },
          ].map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand/40">
              <div className="size-10 grid place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
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

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <SectionHeading
          eyebrow="From the field"
          title="Recent thoughts & notes"
          subtitle="Short reads on sustainability, regulations, and the kit I love using."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { tag: "Regulation", title: "Decoding Saudi NCEC compliance in 2025", date: "Coming soon" },
            { tag: "Tech", title: "BAM 1020 vs Thermo iQ — a field analyst's take", date: "Coming soon" },
            { tag: "Sustainability", title: "Lessons from solarizing a fluidized bed dryer", date: "Coming soon" },
          ].map((b) => (
            <article key={b.title} className="group rounded-2xl overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[16/10] bg-gradient-to-br from-brand/80 to-brand relative overflow-hidden">
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-10 sm:p-14 text-brand-foreground">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-highlight/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Got an emission to measure or a permit to chase?</h2>
            <p className="mt-3 opacity-90">Tell me about your facility — let's keep your stacks clean and your regulators happy.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-highlight px-5 py-3 text-sm font-semibold text-highlight-foreground hover:scale-[1.03] transition">
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Badge({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "highlight" | "muted" }) {
  const map = {
    brand: "bg-brand-soft text-brand border-brand/20",
    highlight: "bg-highlight-soft text-highlight-foreground border-highlight/30",
    muted: "bg-muted text-muted-foreground border-border",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  );
}

function StatCard({
  icon, value, label, tone = "muted", big = false, className = "",
}: { icon: React.ReactNode; value: string; label: string; tone?: "brand" | "highlight" | "muted"; big?: boolean; className?: string }) {
  const tones = {
    brand: "bg-brand text-brand-foreground",
    highlight: "bg-highlight text-highlight-foreground",
    muted: "bg-card text-foreground border border-border",
  } as const;
  return (
    <div className={`rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${tones[tone]} ${className}`}>
      <div className="size-10 grid place-items-center rounded-xl bg-black/10">{icon}</div>
      <div className={`mt-4 font-display font-extrabold ${big ? "text-5xl sm:text-6xl" : "text-3xl"}`}>{value}</div>
      <div className="mt-1 text-sm opacity-80">{label}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">{eyebrow}</div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
