"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "./login/actions";
import { LayoutDashboard, Wrench, MessageSquareQuote, Newspaper, Calendar, User, BookOpen, ArrowLeft, Leaf, LogOut, type LucideIcon } from "lucide-react";

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

  return (
    <div className="min-h-screen flex bg-muted/40">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
        <div className="h-16 flex items-center gap-2 px-5 border-b border-sidebar-border">
          <span className="grid place-items-center size-9 rounded-xl bg-brand-gradient text-brand-foreground shadow-md">
            <Leaf className="size-5" />
          </span>
          <div>
            <div className="font-display font-bold text-sm leading-tight">Farhan Admin</div>
            <div className="text-[11px] text-muted-foreground">Content manager</div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-widest text-muted-foreground">Manage</div>
          {navItems.map((n) => {
            const Icon = n.icon;
            const active = n.exact ? pathname === n.href : pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-brand-gradient text-brand-foreground shadow-md hover:bg-brand-gradient-hover" : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <Icon className="size-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-sidebar-border space-y-1">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent">
            <ArrowLeft className="size-4" /> Back to site
          </Link>
          <button
            onClick={() => logout()}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 hover:text-red-600 transition-colors"
          >
            <LogOut className="size-4" /> Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="size-4 text-brand" />
            <div className="font-semibold text-sm">Dashboard</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-muted-foreground">Signed in as</span>
            <div className="size-8 rounded-full bg-brand-gradient text-brand-foreground grid place-items-center text-xs font-bold shadow-md animate-in fade-in zoom-in-50 duration-300">FA</div>
          </div>
        </header>

        {/* mobile nav */}
        <div className="lg:hidden border-b border-border bg-card px-2 py-2 flex gap-1 overflow-x-auto">
          {navItems.map((n) => {
            const active = n.exact ? pathname === n.href : pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  active ? "bg-brand-gradient text-brand-foreground shadow-md" : "bg-muted text-muted-foreground shadow-sm"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </div>

        <main className="flex-1 p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
