import { Briefcase, Wind, BookOpen, FlaskConical, Award } from "lucide-react";

function StatCard({
  icon, value, label, tone = "muted", big = false, className = "",
}: { icon: React.ReactNode; value: string; label: string; tone?: "brand" | "highlight" | "muted"; big?: boolean; className?: string }) {
  const tones = {
    brand: "bg-brand-gradient text-brand-foreground shadow-md",
    highlight: "bg-highlight text-highlight-foreground shadow-md",
    muted: "bg-card text-foreground border border-border shadow-md",
  } as const;
  return (
    <div className={`rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${tones[tone]} ${className}`}>
      <div className="size-10 grid place-items-center rounded-xl bg-black/10">{icon}</div>
      <div className={`mt-4 font-display font-extrabold ${big ? "text-5xl sm:text-6xl" : "text-3xl"}`}>{value}</div>
      <div className="mt-1 text-sm opacity-80">{label}</div>
    </div>
  );
}

export function StatsBento() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <StatCard className="md:col-span-3" icon={<Briefcase className="size-5" />} value="4+" label="Years of Experience" tone="brand" big />
        <StatCard className="md:col-span-3" icon={<Wind className="size-5" />} value="20+" label="Industrial Projects Managed" tone="highlight" big />
        <StatCard className="md:col-span-2" icon={<BookOpen className="size-5" />} value="1" label="Published Book Chapter" tone="muted" />
        <StatCard className="md:col-span-2" icon={<FlaskConical className="size-5" />} value="6+" label="Heavy-Industry Sectors" tone="muted" />
        <StatCard className="md:col-span-2" icon={<Award className="size-5" />} value="1st" label="World Engineers Day Award" tone="muted" />
      </div>
    </section>
  );
}
