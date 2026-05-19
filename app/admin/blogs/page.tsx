import { AdminPageHeader, Panel, StatusPill } from "@/components/admin-ui";
import { Bold, Italic, Link2, List, Heading2, Image, Eye } from "lucide-react";

export const metadata = {
  title: "Admin Blogs — Farhan Ali",
};

const posts = [
  { title: "Decoding Saudi NCEC Compliance in 2025", status: "Draft", date: "—" },
  { title: "BAM 1020 vs Thermo Scientific iQ", status: "Published", date: "Jan 12, 2025" },
  { title: "Solarizing Industrial Heat", status: "Scheduled", date: "Mar 1, 2026" },
];

export default function BlogsAdmin() {
  return (
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-6">
      {/* ─── Editor ─── */}
      <div className="lg:col-span-2">
        <AdminPageHeader title="Blog Editor" subtitle="Compose and publish articles." actionLabel="Save draft" withSearch={false} />
        <Panel className="p-5">
          <input
            placeholder="Post title…"
            className="admin-input text-xl font-display font-bold !bg-transparent !border-none !p-0 !ring-0 !shadow-none"
            defaultValue="Decoding Saudi NCEC Compliance in 2025"
          />
          <div className="mt-4 flex items-center gap-1 border border-[var(--admin-border)] rounded-xl p-1 bg-[var(--admin-surface-alt)] w-fit">
            {[Heading2, Bold, Italic, List, Link2, Image].map((I, i) => (
              <button key={i} className="admin-toolbar-btn">
                <I className="size-4" />
              </button>
            ))}
          </div>
          <textarea
            rows={14}
            className="admin-input mt-4 !bg-transparent !border-none !p-0 !ring-0 !shadow-none resize-none leading-relaxed text-[var(--admin-fg-secondary)]"
            defaultValue={`What's changed, what hasn't, and the three things every industrial site should be doing this quarter…\n\n## Background\n\nThe Saudi NCEC framework continues to evolve.\n\n## Key updates\n\n- Stack emission frequencies\n- Reporting cadence\n- Audit thresholds`}
          />
        </Panel>
      </div>

      {/* ─── Sidebar ─── */}
      <div className="space-y-4">
        <Panel className="p-5">
          <div className="font-semibold text-sm text-[var(--admin-fg)]">Publish</div>
          <div className="mt-3 space-y-2">
            <button className="admin-btn-primary w-full justify-center py-2.5">Publish</button>
            <button className="admin-btn-secondary w-full justify-center py-2.5">
              <Eye className="size-4" /> Preview
            </button>
          </div>
        </Panel>

        <Panel className="overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--admin-border)] font-semibold text-sm text-[var(--admin-fg)]">
            All posts
          </div>
          <ul>
            {posts.map((p) => (
              <li key={p.title} className="px-5 py-3 flex items-center justify-between gap-3 text-sm hover:bg-[var(--admin-surface-alt)] transition-colors border-b border-[var(--admin-border)] last:border-b-0 cursor-pointer">
                <div className="min-w-0">
                  <div className="font-medium text-[var(--admin-fg)] truncate">{p.title}</div>
                  <div className="text-xs text-[var(--admin-muted)]">{p.date}</div>
                </div>
                <StatusPill
                  tone={p.status === "Published" ? "success" : p.status === "Scheduled" ? "brand" : "warning"}
                  label={p.status}
                />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
