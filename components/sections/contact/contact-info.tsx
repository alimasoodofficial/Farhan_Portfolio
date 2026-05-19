import { MapPin, Mail, Phone } from "lucide-react";

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="size-10 grid place-items-center rounded-xl bg-brand-soft text-brand">{icon}</div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <InfoCard icon={<MapPin className="size-5" />} title="Based in" value="Saudi Arabia" />
      <InfoCard icon={<Mail className="size-5" />} title="Email" value="farhan@example.com" />
      <InfoCard icon={<Phone className="size-5" />} title="Phone" value="+966 5•• ••• •••" />
      <div className="rounded-2xl bg-brand-gradient text-brand-foreground p-6 shadow-md transition-all hover:shadow-lg">
        <div className="text-sm opacity-80">Availability</div>
        <div className="mt-1 font-display text-xl font-bold">Sun – Thu</div>
        <div className="text-sm opacity-90">09:00 – 17:00 (AST)</div>
      </div>
    </div>
  );
}
