import { AdminPageHeader, Panel, StatusPill } from "@/components/admin-ui";
import { Pencil, Trash2 } from "lucide-react";

export const metadata = {
  title: "Admin Services — Farhan Ali",
};

const rows = [
  { name: "Stack Emissions Monitoring", category: "Air quality", status: "Active" },
  { name: "Ambient Air Monitoring", category: "Air quality", status: "Active" },
  { name: "EIA & IEE", category: "Assessment", status: "Active" },
  { name: "NCEC / NEQS Audits", category: "Compliance", status: "Active" },
  { name: "EMP & Permitting", category: "Compliance", status: "Draft" },
];

export default function ServicesAdmin() {
  return (
    <div>
      <AdminPageHeader title="Services" subtitle="Manage what's listed on your services page." actionLabel="Add service" />
      <Panel>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wide text-muted-foreground bg-muted/50">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.name} className="hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium">{r.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{r.category}</td>
                  <td className="px-5 py-3">
                    <StatusPill tone={r.status === "Active" ? "success" : "warning"} label={r.status} />
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-brand">
                        <Pencil className="size-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-destructive">
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
