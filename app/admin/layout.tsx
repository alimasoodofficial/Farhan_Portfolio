"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wrench, MessageSquareQuote, Newspaper, Calendar, User, BookOpen, ArrowLeft, Leaf } from "lucide-react";

const navItems = [
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/profile", label: "About & CV", icon: User },
  { href: "/admin/articles", label: "Articles", icon: BookOpen },
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-muted/40">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
        <div className="h-16 flex items-center gap-2 px-5 border-b border-sidebar-border">
          <span className="grid place-items-center size-9 rounded-xl bg-brand text-brand-foreground">
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
            const active = pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-brand text-brand-foreground shadow-sm" : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <Icon className="size-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-sidebar-border">
          <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent">
            <ArrowLeft className="size-4" /> Back to site
          </Link>
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
            <div className="size-8 rounded-full bg-brand text-brand-foreground grid place-items-center text-xs font-bold">FA</div>
          </div>
        </header>

        {/* mobile nav */}
        <div className="lg:hidden border-b border-border bg-card px-2 py-2 flex gap-1 overflow-x-auto">
          {navItems.map((n) => {
            const active = pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium ${
                  active ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground"
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
