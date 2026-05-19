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
        <h1 className="font-display text-2xl sm:text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        {withSearch && (
          <div className="relative">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search…"
              className="rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 w-full sm:w-64"
            />
          </div>
        )}
        <button
          onClick={onAction}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gradient hover:bg-brand-gradient-hover px-3.5 py-2 text-sm font-semibold text-brand-foreground hover:scale-[1.03] transition shadow-md"
        >
          <Plus className="size-4" /> {actionLabel}
        </button>
      </div>
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card shadow-md ${className}`}>{children}</div>
  );
}

export function StatusPill({ tone, label }: { tone: "success" | "warning" | "neutral" | "brand"; label: string }) {
  const map = {
    success: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    neutral: "bg-muted text-muted-foreground border-border",
    brand: "bg-brand-gradient text-brand-foreground border-brand-dark/20 shadow-sm",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${map[tone]}`}>
      {label}
    </span>
  );
}
