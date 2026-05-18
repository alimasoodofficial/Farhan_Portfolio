import { AdminPageHeader, Panel, StatusPill } from "@/components/admin-ui";
import { Check, X, CalendarDays } from "lucide-react";

export const metadata = {
  title: "Admin Bookings — Farhan Ali",
};

const bookings = [
  { name: "Ahmed Khan", company: "DG Khan Cement", date: "Feb 20, 2026 · 10:30", status: "Pending" },
  { name: "Sara Lee", company: "Bestway Cement", date: "Feb 21, 2026 · 13:00", status: "Approved" },
  { name: "Omar F.", company: "Mari Petroleum", date: "Feb 23, 2026 · 09:00", status: "Pending" },
  { name: "Hira Q.", company: "Tarbela HPP", date: "Feb 25, 2026 · 16:00", status: "Approved" },
  { name: "Zain S.", company: "Al-Ghazi Tractors", date: "Feb 27, 2026 · 14:30", status: "Pending" },
];

export default function BookingsAdmin() {
  const stats = [
    { label: "Pending", value: bookings.filter(b=>b.status==="Pending").length, tone: "warning" as const },
    { label: "Approved", value: bookings.filter(b=>b.status==="Approved").length, tone: "success" as const },
    { label: "This week", value: bookings.length, tone: "brand" as const },
  ];

  return (
    <div>
      <AdminPageHeader title="Bookings" subtitle="Scheduled consultations from clients." actionLabel="New booking" />
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {stats.map((s) => (
          <Panel key={s.label} className="p-5">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="mt-1 flex items-end justify-between">
              <div className="font-display text-3xl font-extrabold">{s.value}</div>
              <CalendarDays className="size-5 text-brand" />
            </div>
          </Panel>
        ))}
      </div>

      <Panel>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground bg-muted/50">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Company</th>
                <th className="px-5 py-3">Date & time</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {bookings.map((b) => (
                <tr key={b.name} className="hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium">{b.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{b.company}</td>
                  <td className="px-5 py-3">{b.date}</td>
                  <td className="px-5 py-3">
                    <StatusPill tone={b.status === "Approved" ? "success" : "warning"} label={b.status} />
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button className="p-2 rounded-lg hover:bg-muted text-green-600">
                        <Check className="size-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-muted text-destructive">
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
