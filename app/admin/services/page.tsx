import { AdminPageHeader, Panel, StatusPill } from "@/components/admin-ui";
import { Pencil, Trash2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Admin Services — Farhan Ali",
};

const rows = [
  { name: "Stack Emissions Monitoring", category: "Air quality", status: "Active", clients: 8 },
  { name: "Ambient Air Monitoring", category: "Air quality", status: "Active", clients: 12 },
  { name: "EIA & IEE", category: "Assessment", status: "Active", clients: 5 },
  { name: "NCEC / NEQS Audits", category: "Compliance", status: "Active", clients: 7 },
  { name: "EMP & Permitting", category: "Compliance", status: "Draft", clients: 0 },
];

export default function ServicesAdmin() {
  const activeCount = rows.filter((r) => r.status === "Active").length;
  const totalClients = rows.reduce((s, r) => s + r.clients, 0);

  return (
    <div className="max-w-[1200px] mx-auto">
      <AdminPageHeader title="Services" subtitle="Manage what's listed on your services page." actionLabel="Add service" />

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total", value: rows.length },
          { label: "Active", value: activeCount },
          { label: "Drafts", value: rows.length - activeCount },
          { label: "Clients served", value: totalClients },
        ].map((s) => (
          <div key={s.label} className="admin-stat-card">
            <div className="text-[11px] uppercase tracking-wide text-[var(--admin-muted)] font-medium">{s.label}</div>
            <div className="font-display text-2xl font-bold mt-1 text-[var(--admin-fg)]">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <Panel>
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Clients</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <td className="font-medium text-[var(--admin-fg)]">{r.name}</td>
                  <td className="text-[var(--admin-muted)]">{r.category}</td>
                  <td className="text-[var(--admin-fg-secondary)]">{r.clients}</td>
                  <td>
                    <StatusPill tone={r.status === "Active" ? "success" : "warning"} label={r.status} />
                  </td>
                  <td className="text-right">
                    <div className="inline-flex items-center gap-0.5">
                      <button className="admin-btn-ghost" title="Edit">
                        <Pencil className="size-4" />
                      </button>
                      <button className="admin-btn-ghost hover:!text-red-400" title="Delete">
                        <Trash2 className="size-4" />
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
