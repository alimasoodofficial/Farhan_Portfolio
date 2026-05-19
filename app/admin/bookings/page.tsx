import { AdminPageHeader, Panel, StatusPill } from "@/components/admin-ui";
import { Check, X, CalendarDays, Clock, Users } from "lucide-react";

export const metadata = {
  title: "Admin Bookings — Farhan Ali",
};

const bookings = [
  { name: "Ahmed Khan", company: "DG Khan Cement", date: "Feb 20, 2026 · 10:30", status: "Pending", type: "Compliance Review" },
  { name: "Sara Lee", company: "Bestway Cement", date: "Feb 21, 2026 · 13:00", status: "Approved", type: "EIA Consultation" },
  { name: "Omar F.", company: "Mari Petroleum", date: "Feb 23, 2026 · 09:00", status: "Pending", type: "Stack Monitoring" },
  { name: "Hira Q.", company: "Tarbela HPP", date: "Feb 25, 2026 · 16:00", status: "Approved", type: "Audit Prep" },
  { name: "Zain S.", company: "Al-Ghazi Tractors", date: "Feb 27, 2026 · 14:30", status: "Pending", type: "EMP Review" },
];

export default function BookingsAdmin() {
  const stats = [
    { label: "Pending", value: bookings.filter(b => b.status === "Pending").length, icon: Clock, accent: "text-amber-400" },
    { label: "Approved", value: bookings.filter(b => b.status === "Approved").length, icon: Check, accent: "text-emerald-400" },
    { label: "This week", value: bookings.length, icon: CalendarDays, accent: "text-[var(--admin-accent)]" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <AdminPageHeader title="Bookings" subtitle="Scheduled consultations from clients." actionLabel="New booking" />

      {/* Stat cards */}
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="admin-stat-card">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-wide text-[var(--admin-muted)] font-medium">{s.label}</div>
                <Icon className={`size-4 ${s.accent}`} />
              </div>
              <div className="font-display text-3xl font-extrabold mt-2 text-[var(--admin-fg)]">{s.value}</div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <Panel>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Company</th>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.name}>
                  <td>
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-full bg-[var(--admin-surface-alt)] flex items-center justify-center text-xs font-bold text-[var(--admin-accent)]">
                        {b.name.split(" ").map((w) => w[0]).join("")}
                      </div>
                      <span className="font-medium text-[var(--admin-fg)]">{b.name}</span>
                    </div>
                  </td>
                  <td className="text-[var(--admin-muted)]">{b.company}</td>
                  <td className="text-[var(--admin-fg-secondary)]">{b.type}</td>
                  <td className="text-[var(--admin-fg-secondary)] text-xs">{b.date}</td>
                  <td>
                    <StatusPill tone={b.status === "Approved" ? "success" : "warning"} label={b.status} />
                  </td>
                  <td className="text-right">
                    <div className="inline-flex items-center gap-0.5">
                      <button className="admin-btn-ghost hover:!text-emerald-400" title="Approve">
                        <Check className="size-4" />
                      </button>
                      <button className="admin-btn-ghost hover:!text-red-400" title="Reject">
                        <X className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
