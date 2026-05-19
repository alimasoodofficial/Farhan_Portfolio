"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "./login/actions";
import {
  LayoutDashboard, Wrench, MessageSquareQuote, Newspaper,
  Calendar, User, BookOpen, ArrowLeft, LogOut, type LucideIcon,
} from "lucide-react";

interface NavItem {
  readonly href: string;
  readonly label: string;
  readonly icon: LucideIcon;
  readonly exact?: boolean;
}

const navItems: readonly NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/profile", label: "About & CV", icon: User },
  { href: "/admin/articles", label: "Articles", icon: BookOpen },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  /* derive breadcrumb label */
  const activeNav = navItems.find((n) =>
    n.exact ? pathname === n.href : pathname?.startsWith(n.href)
  );
  const breadcrumb = activeNav?.label ?? "Dashboard";

  return (
    <div className="admin-theme min-h-screen flex">
      {/* ─── Sidebar ─── */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col admin-sidebar">
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-[var(--admin-border)]">
          <span className="grid place-items-center size-9 rounded-xl bg-gradient-to-br from-[var(--admin-accent)] to-[var(--admin-accent-dark)] text-[#ffffff] shadow-md font-bold text-sm">
            FA
          </span>
          <div>
            <div className="font-display font-bold text-sm leading-tight text-[var(--admin-fg)]">Farhan Admin</div>
            <div className="text-[11px] text-[var(--admin-muted)]">Content Manager</div>
          </div>
        </div>

        {/* Nav section */}
        <nav className="flex-1 px-3 pt-5 space-y-0.5">
          <div className="px-3 pb-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--admin-muted)]">Manage</div>
          {navItems.map((n) => {
            const Icon = n.icon;
            const active = n.exact ? pathname === n.href : pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className="admin-sidebar-link"
                data-active={active ? "true" : "false"}
              >
                <Icon className="size-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="p-3 border-t border-[var(--admin-border)] space-y-0.5">
          <Link href="/" className="admin-sidebar-link">
            <ArrowLeft className="size-4" /> Back to site
          </Link>
          <button
            onClick={() => logout()}
            className="admin-sidebar-link w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            <LogOut className="size-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* ─── Main column ─── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-[var(--admin-border)] bg-[var(--admin-surface)] px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <LayoutDashboard className="size-4 text-[var(--admin-accent)]" />
            <span className="text-[var(--admin-muted)]">/</span>
            <span className="font-medium text-[var(--admin-fg)]">{breadcrumb}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-[var(--admin-muted)]">Signed in as <span className="text-[var(--admin-accent)] font-medium">Farhan</span></span>
            <div className="size-8 rounded-full bg-gradient-to-br from-[var(--admin-accent)] to-[var(--admin-accent-dark)] text-[#ffffff] grid place-items-center text-xs font-bold shadow-md">
              FA
            </div>
          </div>
        </header>

        {/* Mobile nav */}
        <div className="lg:hidden border-b border-[var(--admin-border)] bg-[var(--admin-surface)] px-2 py-2 flex gap-1 overflow-x-auto">
          {navItems.map((n) => {
            const active = n.exact ? pathname === n.href : pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className="admin-mobile-pill"
                data-active={active ? "true" : "false"}
              >
                {n.label}
              </Link>
            );
          })}
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
