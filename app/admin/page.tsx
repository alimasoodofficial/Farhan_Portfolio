import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, MessageSquareQuote, Newspaper, Calendar, User, BookOpen, ArrowRight } from "lucide-react";

const overviewItems = [
  { href: "/admin/services", label: "Services", description: "Manage your portfolio services and offerings", icon: Wrench, color: "text-blue-500", bg: "bg-blue-500/10" },
  { href: "/admin/testimonials", label: "Testimonials", description: "Review and approve client feedback", icon: MessageSquareQuote, color: "text-green-500", bg: "bg-green-500/10" },
  { href: "/admin/blogs", label: "Blogs", description: "Write and publish blog posts", icon: Newspaper, color: "text-purple-500", bg: "bg-purple-500/10" },
  { href: "/admin/bookings", label: "Bookings", description: "Manage incoming consultation requests", icon: Calendar, color: "text-orange-500", bg: "bg-orange-500/10" },
  { href: "/admin/profile", label: "About & CV", description: "Update your personal details and resume", icon: User, color: "text-pink-500", bg: "bg-pink-500/10" },
  { href: "/admin/articles", label: "Articles", description: "Manage your published articles and publications", icon: BookOpen, color: "text-indigo-500", bg: "bg-indigo-500/10" },
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2 text-lg">Welcome back to your portfolio command center.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overviewItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="block group">
              <Card 
                className="h-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 bg-card hover:border-brand/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-2xl ${item.bg}`}>
                      <Icon className={`size-6 ${item.color}`} />
                    </div>
                    <div className="size-8 rounded-full bg-muted flex items-center justify-center transition-colors group-hover:bg-brand-gradient group-hover:text-brand-foreground shadow-sm group-hover:shadow-md">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.label}</CardTitle>
                  <CardDescription className="text-sm mt-2 line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
