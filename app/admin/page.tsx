import Link from "next/link";
import {
  Wrench, MessageSquareQuote, Newspaper, Calendar, User, BookOpen,
  ArrowRight, TrendingUp, Clock, CheckCircle2, FileText,
} from "lucide-react";

const overviewItems = [
  {
    href: "/admin/services",
    label: "Services",
    description: "Manage your portfolio services, packages, pricing formulas, and distinct offerings.",
    icon: Wrench,
    color: "#3b82f6",
    stat: "6 Active",
    statColor: "text-sky-400",
  },
  {
    href: "/admin/testimonials",
    label: "Testimonials",
    description: "Review, approve, and sequence organic client feedback elements to display on-site.",
    icon: MessageSquareQuote,
    color: "#22c55e",
    stat: "12 Approved",
    statColor: "text-emerald-400",
  },
  {
    href: "/admin/blogs",
    label: "Blogs",
    description: "Compose rich content layout updates, write and publish creative thoughts or blog posts.",
    icon: Newspaper,
    color: "#a855f7",
    stat: "24 Posts",
    statColor: "text-purple-400",
  },
  {
    href: "/admin/bookings",
    label: "Bookings",
    description: "Manage incoming consultation slots, check customer timelines, and filter dates.",
    icon: Calendar,
    color: "#f97316",
    stat: "3 Pending",
    statColor: "text-orange-400",
  },
  {
    href: "/admin/profile",
    label: "About & CV",
    description: "Update your personal biographical timeline, dynamic history details, and live resumes.",
    icon: User,
    color: "#ec4899",
    stat: "Last updated 2d ago",
    statColor: "text-amber-400",
  },
  {
    href: "/admin/articles",
    label: "Articles",
    description: "Manage your published external articles, research integrations, and media features.",
    icon: BookOpen,
    color: "#6366f1",
    stat: "14 Published",
    statColor: "text-indigo-400",
  },
];

const recentActivity = [
  { initials: "JD", name: "John Doe", type: "UX/UI Strategy Consult", status: "Pending", statusColor: "text-amber-400", time: "Today, 4:30 PM", bgColor: "bg-amber-500/20 text-amber-400" },
  { initials: "AS", name: "Alice Smith", type: "Full-Stack Development Briefing", status: "Confirmed", statusColor: "text-emerald-400", time: "Yesterday", bgColor: "bg-emerald-500/20 text-emerald-400" },
  { initials: "MK", name: "Maria Khan", type: "Environmental Audit Review", status: "Confirmed", statusColor: "text-emerald-400", time: "2 days ago", bgColor: "bg-sky-500/20 text-sky-400" },
];

const metrics = [
  { label: "Blog Viewers Conversion", value: 74, color: "bg-emerald-500" },
  { label: "Booking Slot Capacities", value: 40, color: "bg-[var(--admin-accent)]" },
  { label: "Testimonials Approval Rate", value: 88, color: "bg-purple-500" },
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      {/* ─── Welcome Banner ─── */}
      <div className="admin-banner">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Dashboard Overview
            </h1>
            <p className="text-[var(--admin-muted)] mt-1.5 text-sm sm:text-base">
              Welcome back to your portfolio command center. Everything looks good today.
            </p>
          </div>
          <Link
            href="/admin/bookings"
            className="admin-btn-secondary shrink-0 text-xs sm:text-sm"
          >
            <TrendingUp className="size-4" />
            View Live Analytics
          </Link>
        </div>
      </div>

      {/* ─── Section Title ─── */}
      <div className="flex items-center gap-2">
        <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--admin-accent)]">
          Core Management Panels
        </div>
        <div className="flex-1 h-px bg-[var(--admin-border)]" />
      </div>

      {/* ─── Card Grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="group block">
              <div className="admin-card">
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="size-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    <Icon className="size-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-base text-[var(--admin-fg)] mb-1.5">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[var(--admin-muted)] leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${item.statColor}`}>
                      {item.stat}
                    </span>
                    <div className="size-7 rounded-full bg-[var(--admin-surface-alt)] flex items-center justify-center transition-all group-hover:bg-[var(--admin-accent)] group-hover:text-[#ffffff]">
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ─── Bottom Section ─── */}
      <div className="grid lg:grid-cols-5 gap-4">
        {/* Recent Activity */}
        <div className="lg:col-span-3 admin-panel overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--admin-border)]">
            <h2 className="font-display font-bold text-sm text-[var(--admin-fg)]">
              Recent Booking Consultation Activities
            </h2>
            <Link href="/admin/bookings" className="text-xs text-[var(--admin-accent)] hover:underline font-medium">
              View all slots
            </Link>
          </div>
          <div className="divide-y divide-[var(--admin-border)]">
            {recentActivity.map((a) => (
              <div key={a.name} className="flex items-center gap-3 px-5 py-3.5 hover:bg-[var(--admin-surface-alt)] transition-colors">
                <div className={`size-9 rounded-full ${a.bgColor} flex items-center justify-center text-xs font-bold shrink-0`}>
                  {a.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--admin-fg)]">{a.name}</div>
                  <div className="text-xs text-[var(--admin-muted)] truncate">{a.type}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-xs font-semibold ${a.statusColor}`}>{a.status}</div>
                  <div className="text-[11px] text-[var(--admin-muted)]">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Reach */}
        <div className="lg:col-span-2 admin-panel overflow-hidden">
          <div className="px-5 py-4 border-b border-[var(--admin-border)]">
            <h2 className="font-display font-bold text-sm text-[var(--admin-fg)]">
              Portfolio Reach
            </h2>
            <p className="text-[11px] text-[var(--admin-muted)] mt-0.5">
              Total overview metric aggregates tracking visibility components over the last 30 days.
            </p>
          </div>
          <div className="p-5 space-y-4">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--admin-fg-secondary)]">{m.label}</span>
                  <span className="font-semibold text-[var(--admin-fg)]">{m.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--admin-surface-alt)] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${m.color} transition-all duration-700`}
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick stats row */}
          <div className="border-t border-[var(--admin-border)] grid grid-cols-3 divide-x divide-[var(--admin-border)]">
            <div className="px-4 py-3 text-center">
              <div className="text-lg font-bold text-[var(--admin-fg)]">24</div>
              <div className="text-[10px] text-[var(--admin-muted)]">Posts</div>
            </div>
            <div className="px-4 py-3 text-center">
              <div className="text-lg font-bold text-[var(--admin-accent)]">12</div>
              <div className="text-[10px] text-[var(--admin-muted)]">Reviews</div>
            </div>
            <div className="px-4 py-3 text-center">
              <div className="text-lg font-bold text-[var(--admin-fg)]">6</div>
              <div className="text-[10px] text-[var(--admin-muted)]">Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
