import { AdminPageHeader, Panel } from "@/components/admin-ui";
import { Plus, Trash2, GraduationCap, Briefcase } from "lucide-react";

export const metadata = {
  title: "Admin Profile — Farhan Ali",
};

export default function ProfileAdmin() {
  return (
    <div className="max-w-[1000px] mx-auto space-y-6">
      <AdminPageHeader title="About & CV" subtitle="Update bio, education, and roles shown on the public site." actionLabel="Save changes" withSearch={false} />

      <Panel className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="size-8 rounded-lg bg-[var(--admin-accent)]/15 flex items-center justify-center text-[var(--admin-accent)]">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h2 className="font-display font-bold text-[var(--admin-fg)]">Bio</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <Labeled label="Display name"><input defaultValue="Farhan Ali" className="admin-input" /></Labeled>
          <Labeled label="Headline"><input defaultValue="Environmental Specialist & Engineer" className="admin-input" /></Labeled>
          <Labeled label="Location"><input defaultValue="Saudi Arabia" className="admin-input" /></Labeled>
          <Labeled label="Status"><input defaultValue="Open to consulting" className="admin-input" /></Labeled>
        </div>
        <Labeled label="Short bio" className="mt-3">
          <textarea rows={4} className="admin-input resize-none" defaultValue="Environmental engineer focused on air-quality monitoring and compliance." />
        </Labeled>
      </Panel>

      <Panel className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400">
              <GraduationCap className="size-4" />
            </div>
            <h2 className="font-display font-bold text-[var(--admin-fg)]">Education</h2>
          </div>
          <button className="admin-btn-primary text-xs py-1.5 px-3">
            <Plus className="size-3.5" /> Add entry
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <Labeled label="Degree"><input defaultValue="B.Sc. Environmental Engineering" className="admin-input" /></Labeled>
          <Labeled label="Institution"><input defaultValue="University of Agriculture, Faisalabad" className="admin-input" /></Labeled>
          <Labeled label="FYP title" className="sm:col-span-2">
            <input defaultValue="Solarization of Thermal Power Source of Fluidized Bed Dryer" className="admin-input" />
          </Labeled>
          <Labeled label="Outcome" className="sm:col-span-2">
            <textarea rows={3} className="admin-input resize-none" defaultValue="Achieved 70–80°C using Flat-Plate Collectors." />
          </Labeled>
        </div>
      </Panel>

      <Panel className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400">
              <Briefcase className="size-4" />
            </div>
            <h2 className="font-display font-bold text-[var(--admin-fg)]">Experience</h2>
          </div>
          <button className="admin-btn-primary text-xs py-1.5 px-3">
            <Plus className="size-3.5" /> Add role
          </button>
        </div>
        <div className="space-y-2.5">
          {["REC, Saudi Arabia · 2025 → Present", "PACHEM Global · 2024 → 2025", "ESPAK · 2022 → 2024", "Triisum · 2021 → 2022"].map((row) => (
            <div key={row} className="admin-entry-row">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-[var(--admin-accent)]" />
                <span className="text-sm font-medium text-[var(--admin-fg)]">{row}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="admin-btn-secondary text-xs py-1 px-2.5">Edit</button>
                <button className="admin-btn-ghost hover:!text-red-400"><Trash2 className="size-4" /></button>
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
      <span className="block text-xs font-medium text-[var(--admin-muted)] mb-1.5">{label}</span>
      {children}
    </label>
  );
}
