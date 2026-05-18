import { AdminPageHeader, Panel } from "@/components/admin-ui";
import { ExternalLink, Pencil, Trash2, Plus } from "lucide-react";

export const metadata = {
  title: "Admin Articles — Farhan Ali",
};

const inputCls = "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const articles = [
  {
    title: "Air Pollution from Industrial Emissions and Its Control in Pakistan",
    date: "Jan 15, 2024",
    url: "https://www.intechopen.com/",
  },
];

export default function ArticlesAdmin() {
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2">
        <AdminPageHeader title="Add article" subtitle="Publish a new research entry." actionLabel="Save" withSearch={false} />
        <Panel className="p-6 space-y-3">
          <Field label="Title"><input className={inputCls} placeholder="Paper title" /></Field>
          <Field label="Publication"><input className={inputCls} placeholder="Journal or publisher" /></Field>
          <Field label="Publication date"><input type="date" className={inputCls} /></Field>
          <Field label="External URL">
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-input border-r-0 bg-muted text-xs text-muted-foreground">https://</span>
              <input className={`${inputCls} rounded-l-none`} placeholder="example.com/your-paper" />
            </div>
          </Field>
          <button className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:scale-[1.03] transition">
            <Plus className="size-4" /> Add article
          </button>
        </Panel>
      </div>

      <div className="lg:col-span-3">
        <div className="mb-6">
          <h2 className="font-display text-xl font-bold">Published articles</h2>
          <p className="text-sm text-muted-foreground">Edit or remove existing entries.</p>
        </div>
        <Panel className="divide-y divide-border">
          {articles.map((a) => (
            <div key={a.title} className="p-5 flex items-start gap-3">
              <div className="flex-1">
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{a.date}</div>
                <a href={a.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-brand hover:underline mt-2">
                  {a.url} <ExternalLink className="size-3.5" />
                </a>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-brand">
                  <Pencil className="size-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-destructive">
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
      <span className="block text-xs font-medium text-muted-foreground mb-1">{label}</span>
      {children}
    </label>
  );
}
