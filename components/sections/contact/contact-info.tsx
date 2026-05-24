import { MapPin, Mail, Phone, Calendar, Clock, Globe } from "lucide-react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

function InfoCard({ icon, title, value, href }: InfoCardProps) {
  const CardWrapper = href ? "a" : "div";
  
  return (
    <CardWrapper
      href={href}
      className={`group block rounded-2xl border border-border bg-card/60 backdrop-blur-md p-5 flex items-start gap-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:bg-card/40 ${
        href ? "cursor-pointer hover:bg-brand-soft/20 dark:hover:bg-brand-soft/10" : ""
      }`}
    >
      <div className="size-11 shrink-0 grid place-items-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground dark:bg-brand-soft/10">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">{title}</div>
        <div className="mt-1 font-semibold text-foreground text-sm sm:text-base truncate group-hover:text-brand transition-colors">
          {value}
        </div>
      </div>
    </CardWrapper>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <InfoCard 
        icon={<MapPin className="size-5.5" />} 
        title="Based in" 
        value="Saudi Arabia" 
      />
      <InfoCard 
        icon={<Mail className="size-5.5" />} 
        title="Email Me" 
        value="farhan@example.com" 
        href="mailto:farhan@example.com"
      />
      <InfoCard 
        icon={<Phone className="size-5.5" />} 
        title="Call / WhatsApp" 
        value="+966 5•• ••• •••" 
        href="tel:+966500000000"
      />
      
      {/* Availability Status Card */}
      <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-brand-gradient text-brand-foreground p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-brand/10">
        {/* Decorative subtle light highlight */}
        <div className="absolute -top-12 -right-12 size-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-85">Availability Status</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-xs font-medium text-brand-foreground">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Accepting Work
          </span>
        </div>

        <div className="mt-6 flex gap-4 items-start">
          <div className="rounded-lg bg-white/10 p-2 shrink-0">
            <Calendar className="size-5 text-brand-foreground" />
          </div>
          <div>
            <div className="text-xs opacity-75 font-medium">Work Week</div>
            <div className="font-display text-lg font-bold mt-0.5">Sunday – Thursday</div>
          </div>
        </div>

        <div className="mt-4 flex gap-4 items-start">
          <div className="rounded-lg bg-white/10 p-2 shrink-0">
            <Clock className="size-5 text-brand-foreground" />
          </div>
          <div>
            <div className="text-xs opacity-75 font-medium">Hours (Arabian Standard Time)</div>
            <div className="font-display text-lg font-bold mt-0.5">09:00 – 17:00 (AST)</div>
            <div className="text-xs opacity-70 mt-0.5 flex items-center gap-1">
              <Globe className="size-3" /> UTC+3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

