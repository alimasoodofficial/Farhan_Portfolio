import { AdminPageHeader, StatusPill } from "@/components/admin-ui";
import { Check, X, Pencil, Star } from "lucide-react";

export const metadata = {
  title: "Admin Testimonials — Farhan Ali",
};

const list = [
  { name: "Plant Manager", company: "Major Cement Producer", status: "Approved", quote: "Cleanest stack monitoring reports we've received." },
  { name: "HSE Lead", company: "Upstream Petroleum", status: "Pending", quote: "Calibrations, paperwork, regulator comms — all handled." },
  { name: "Operations Director", company: "Textile Mill", status: "Approved", quote: "Our EMP is actually being used on the floor now." },
  { name: "EHS Manager", company: "Automotive Plant", status: "Pending", quote: "Turned fragmented data into a clear roadmap." },
];

export default function TestimonialsAdmin() {
  return (
    <div>
      <AdminPageHeader title="Testimonials" subtitle="Review, approve, or edit client reviews." actionLabel="Add testimonial" />
      <div className="grid md:grid-cols-2 gap-4">
        {list.map((t) => (
          <div key={t.quote} className="rounded-2xl border border-border bg-card p-5 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
              <StatusPill tone={t.status === "Approved" ? "success" : "warning"} label={t.status} />
            </div>
            <div className="mt-3 flex items-center gap-1 text-highlight">
              {[0,1,2,3,4].map(i => <Star key={i} className="size-3.5 fill-current" />)}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">"{t.quote}"</p>
            <div className="mt-4 flex items-center gap-2">
              <button className="inline-flex items-center gap-1 rounded-lg bg-brand-gradient hover:bg-brand-gradient-hover px-3 py-1.5 text-xs font-semibold text-brand-foreground hover:scale-[1.03] transition shadow-md">
                <Check className="size-3.5" /> Approve
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted">
                <Pencil className="size-3.5" /> Edit
              </button>
              <button className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted text-destructive">
                <X className="size-3.5" /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
