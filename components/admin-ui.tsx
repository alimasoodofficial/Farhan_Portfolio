import { Plus, Search } from "lucide-react";
import type { ReactNode } from "react";

export function AdminPageHeader({
  title,
  subtitle,
  actionLabel = "Add new",
  onAction,
  withSearch = true,
}: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
  withSearch?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-[var(--admin-muted)] mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        {withSearch && (
          <div className="relative">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--admin-muted)]" />
            <input
              placeholder="Search…"
              className="rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface)] pl-9 pr-3 py-2 text-sm outline-none focus:border-[var(--admin-accent)] focus:ring-2 focus:ring-[var(--admin-accent)]/20 w-full sm:w-64 text-[var(--admin-fg)] placeholder:text-[var(--admin-muted)]"
            />
          </div>
        )}
        <button
          onClick={onAction}
          className="admin-btn-primary"
        >
          <Plus className="size-4" /> {actionLabel}
        </button>
      </div>
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`admin-panel ${className}`}>{children}</div>
  );
}

export function StatusPill({ tone, label }: { tone: "success" | "warning" | "neutral" | "brand" | "info"; label: string }) {
  const map = {
    success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    neutral: "bg-[var(--admin-surface-alt)] text-[var(--admin-muted)] border-[var(--admin-border)]",
    brand: "bg-[var(--admin-accent)]/15 text-[var(--admin-accent)] border-[var(--admin-accent)]/20",
    info: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${map[tone]}`}>
      {label}
    </span>
  );
}
