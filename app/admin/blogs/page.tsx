import { AdminPageHeader, Panel, StatusPill } from "@/components/admin-ui";
import { Bold, Italic, Link2, List, Heading2, Image } from "lucide-react";

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
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <AdminPageHeader title="Blog editor" subtitle="Compose and publish articles." actionLabel="Save draft" withSearch={false} />
        <Panel className="p-5">
          <input
            placeholder="Post title…"
            className="w-full text-2xl font-display font-bold bg-transparent outline-none placeholder:text-muted-foreground"
            defaultValue="Decoding Saudi NCEC Compliance in 2025"
          />
          <div className="mt-4 flex items-center gap-1 border border-border rounded-xl p-1 bg-muted/40 w-fit">
            {[Heading2, Bold, Italic, List, Link2, Image].map((I, i) => (
              <button key={i} className="p-2 rounded-lg hover:bg-card text-muted-foreground hover:text-brand">
                <I className="size-4" />
              </button>
            ))}
          </div>
          <textarea
            rows={14}
            className="mt-4 w-full bg-transparent outline-none resize-none text-sm leading-relaxed"
            defaultValue={`What's changed, what hasn't, and the three things every industrial site should be doing this quarter…\n\n## Background\n\nThe Saudi NCEC framework continues to evolve.\n\n## Key updates\n\n- Stack emission frequencies\n- Reporting cadence\n- Audit thresholds`}
          />
        </Panel>
      </div>

      <div className="space-y-4">
        <Panel className="p-5">
          <div className="font-semibold">Publish</div>
          <div className="mt-3 space-y-2 text-sm">
            <button className="w-full rounded-lg bg-brand py-2 font-semibold text-brand-foreground hover:scale-[1.02] transition">Publish</button>
            <button className="w-full rounded-lg border border-border py-2 font-medium hover:bg-muted">Save draft</button>
          </div>
        </Panel>
        <Panel>
          <div className="px-5 py-3 border-b border-border font-semibold">All posts</div>
          <ul className="divide-y divide-border">
            {posts.map((p) => (
              <li key={p.title} className="px-5 py-3 flex items-center justify-between gap-3 text-sm hover:bg-muted/40">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.date}</div>
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
