import { AdminPageHeader, Panel } from "@/components/admin-ui";
import { Plus, Trash2 } from "lucide-react";

export const metadata = {
  title: "Admin Profile — Farhan Ali",
};

const inputCls = "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ProfileAdmin() {
  return (
    <div className="space-y-6">
      <AdminPageHeader title="About & CV" subtitle="Update bio, education, and roles shown on the public site." actionLabel="Save changes" withSearch={false} />

      <Panel className="p-6">
        <div className="font-semibold">Bio</div>
        <div className="mt-3 grid sm:grid-cols-2 gap-3">
          <Labeled label="Display name"><input defaultValue="Farhan Ali" className={inputCls} /></Labeled>
          <Labeled label="Headline"><input defaultValue="Environmental Specialist & Engineer" className={inputCls} /></Labeled>
          <Labeled label="Location"><input defaultValue="Saudi Arabia" className={inputCls} /></Labeled>
          <Labeled label="Status"><input defaultValue="Open to consulting" className={inputCls} /></Labeled>
        </div>
        <Labeled label="Short bio" className="mt-3">
          <textarea rows={4} className={`${inputCls} resize-none`} defaultValue="Environmental engineer focused on air-quality monitoring and compliance." />
        </Labeled>
      </Panel>

      <Panel className="p-6">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Education</div>
          <button className="inline-flex items-center gap-1 rounded-lg bg-brand-soft text-brand px-3 py-1.5 text-xs font-semibold hover:bg-brand hover:text-brand-foreground transition">
            <Plus className="size-3.5" /> Add entry
          </button>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <Labeled label="Degree"><input defaultValue="B.Sc. Environmental Engineering" className={inputCls} /></Labeled>
          <Labeled label="Institution"><input defaultValue="University of Agriculture, Faisalabad" className={inputCls} /></Labeled>
          <Labeled label="FYP title" className="sm:col-span-2">
            <input defaultValue="Solarization of Thermal Power Source of Fluidized Bed Dryer" className={inputCls} />
          </Labeled>
          <Labeled label="Outcome" className="sm:col-span-2">
            <textarea rows={3} className={`${inputCls} resize-none`} defaultValue="Achieved 70–80°C using Flat-Plate Collectors." />
          </Labeled>
        </div>
      </Panel>

      <Panel className="p-6">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Experience entries</div>
          <button className="inline-flex items-center gap-1 rounded-lg bg-brand-soft text-brand px-3 py-1.5 text-xs font-semibold hover:bg-brand hover:text-brand-foreground transition">
            <Plus className="size-3.5" /> Add role
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {["REC, Saudi Arabia · 2025 → Present", "PACHEM Global · 2024 → 2025", "ESPAK · 2022 → 2024", "Triisum · 2021 → 2022"].map((row) => (
            <div key={row} className="flex items-center justify-between border border-border rounded-xl px-4 py-3 hover:bg-muted/40">
              <div className="text-sm font-medium">{row}</div>
              <div className="flex items-center gap-1">
                <button className="text-xs rounded-lg border border-border px-2.5 py-1 hover:bg-muted">Edit</button>
                <button className="p-1.5 rounded-lg hover:bg-muted text-destructive"><Trash2 className="size-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function Labeled({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-medium text-muted-foreground mb-1">{label}</span>
      {children}
    </label>
  );
}
