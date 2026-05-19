import { AdminPageHeader, Panel } from "@/components/admin-ui";
import { ExternalLink, Pencil, Trash2, Plus, FileText } from "lucide-react";

export const metadata = {
  title: "Admin Articles — Farhan Ali",
};

const articles = [
  {
    title: "Air Pollution from Industrial Emissions and Its Control in Pakistan",
    date: "Jan 15, 2024",
    url: "https://www.intechopen.com/",
  },
];

export default function ArticlesAdmin() {
  return (
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-5 gap-6">
      {/* Add form */}
      <div className="lg:col-span-2">
        <AdminPageHeader title="Add Article" subtitle="Publish a new research entry." actionLabel="Save" withSearch={false} />
        <Panel className="p-6 space-y-3">
          <Field label="Title"><input className="admin-input" placeholder="Paper title" /></Field>
          <Field label="Publication"><input className="admin-input" placeholder="Journal or publisher" /></Field>
          <Field label="Publication date"><input type="date" className="admin-input" /></Field>
          <Field label="External URL">
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-[var(--admin-border-strong)] border-r-0 bg-[var(--admin-surface-alt)] text-xs text-[var(--admin-muted)]">https://</span>
              <input className="admin-input !rounded-l-none" placeholder="example.com/your-paper" />
            </div>
          </Field>
          <button className="admin-btn-primary mt-2">
            <Plus className="size-4" /> Add article
          </button>
        </Panel>
      </div>

      {/* Published list */}
      <div className="lg:col-span-3">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="size-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
              <FileText className="size-4" />
            </div>
            <h2 className="font-display text-xl font-bold text-[var(--admin-fg)]">Published Articles</h2>
          </div>
          <p className="text-sm text-[var(--admin-muted)] ml-10">Edit or remove existing entries.</p>
        </div>
        <Panel className="divide-y divide-[var(--admin-border)]">
          {articles.map((a) => (
            <div key={a.title} className="p-5 flex items-start gap-3 hover:bg-[var(--admin-surface-alt)] transition-colors">
              <div className="flex-1 min-w-0">
                <div className="font-medium text-[var(--admin-fg)]">{a.title}</div>
                <div className="text-xs text-[var(--admin-muted)] mt-1">{a.date}</div>
                <a href={a.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--admin-accent)] hover:underline mt-2">
                  {a.url} <ExternalLink className="size-3.5" />
                </a>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                <button className="admin-btn-ghost hover:!text-[var(--admin-accent)]" title="Edit">
                  <Pencil className="size-4" />
                </button>
                <button className="admin-btn-ghost hover:!text-red-400" title="Delete">
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </Panel>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-[var(--admin-muted)] mb-1.5">{label}</span>
      {children}
    </label>
  );
}
