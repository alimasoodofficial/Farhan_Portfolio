import { AdminPageHeader, StatusPill } from "@/components/admin-ui";
import { Check, X, Pencil, Star } from "lucide-react";

export const metadata = {
  title: "Admin Testimonials — Farhan Ali",
};

const list = [
  { name: "Plant Manager", company: "Major Cement Producer", status: "Approved", quote: "Cleanest stack monitoring reports we've received.", rating: 5 },
  { name: "HSE Lead", company: "Upstream Petroleum", status: "Pending", quote: "Calibrations, paperwork, regulator comms — all handled.", rating: 5 },
  { name: "Operations Director", company: "Textile Mill", status: "Approved", quote: "Our EMP is actually being used on the floor now.", rating: 4 },
  { name: "EHS Manager", company: "Automotive Plant", status: "Pending", quote: "Turned fragmented data into a clear roadmap.", rating: 5 },
];

export default function TestimonialsAdmin() {
  const approved = list.filter((t) => t.status === "Approved").length;
  const pending = list.filter((t) => t.status === "Pending").length;

  return (
    <div className="max-w-[1200px] mx-auto">
      <AdminPageHeader title="Testimonials" subtitle="Review, approve, or edit client reviews." actionLabel="Add testimonial" />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Total", value: list.length, accent: false },
          { label: "Approved", value: approved, accent: true },
          { label: "Pending", value: pending, accent: false },
        ].map((s) => (
          <div key={s.label} className="admin-stat-card">
            <div className="text-[11px] uppercase tracking-wide text-[var(--admin-muted)] font-medium">{s.label}</div>
            <div className={`font-display text-2xl font-bold mt-1 ${s.accent ? "text-[var(--admin-accent)]" : "text-[var(--admin-fg)]"}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {list.map((t) => (
          <div key={t.quote} className="admin-panel p-5 transition-all hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[var(--admin-surface-alt)] flex items-center justify-center text-xs font-bold text-[var(--admin-accent)]">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[var(--admin-fg)]">{t.name}</div>
                  <div className="text-xs text-[var(--admin-muted)]">{t.company}</div>
                </div>
              </div>
              <StatusPill tone={t.status === "Approved" ? "success" : "warning"} label={t.status} />
            </div>
            <div className="mt-3 flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-[var(--admin-surface-alt)]"}`}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-[var(--admin-muted)] italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-2">
              <button className="admin-btn-primary text-xs py-1.5 px-3">
                <Check className="size-3.5" /> Approve
              </button>
              <button className="admin-btn-secondary text-xs py-1.5 px-3">
                <Pencil className="size-3.5" /> Edit
              </button>
              <button className="admin-btn-secondary text-xs py-1.5 px-3 hover:!text-red-400 hover:!border-red-500/30">
                <X className="size-3.5" /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
