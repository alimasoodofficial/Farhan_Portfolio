"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, ArrowLeft } from "lucide-react";

interface BannerConfig {
  tag: string;
  title: string;
  subtitle: string;
  colorClass: string;
}

const bannerData: Record<string, BannerConfig> = {
  "/about": {
    tag: "About Farhan Ali",
    title: "The Engineer Behind The Readings",
    subtitle: "Operating at the intersection of heavy machinery, precise data pipelines, and strict environmental compliance — ensuring industries run efficiently while protecting ambient air resources.",
    colorClass: "from-brand/10 to-highlight/15"
  },
  "/services": {
    tag: "Services Portfolio",
    title: "Pick A Problem. I'll Bring The Toolkit.",
    subtitle: "Modular environmental services for industrial clients — engage one, or stack them all into a full compliance program.",
    colorClass: "from-blue-500/10 to-brand/10"
  },
  "/blogs": {
    tag: "Publications & Insights",
    title: "Field Notes & Long Technical Reads",
    subtitle: "Short essays on regulations, emission diagnostic instruments, and the practical side of being an environmental engineer.",
    colorClass: "from-highlight/10 to-brand/10"
  },
  "/contact": {
    tag: "Get In Touch",
    title: "Let's Talk Industrial Compliance",
    subtitle: "Whether you want to audit a cement facility, scope a sensor network, or book an hours-based consulting slot, I'm here to help.",
    colorClass: "from-brand/10 to-highlight/20"
  },
  "/experience": {
    tag: "My Journey",
    title: "From The Field To The Boardroom",
    subtitle: "Four years of hands-on experience spanning corporate consulting, rigorous stack emission monitoring, and eco-friendly community development.",
    colorClass: "from-emerald-500/10 to-brand/10"
  },
  "/research": {
    tag: "Academic Contributions",
    title: "Published Scientific Research",
    subtitle: "Selected publications and book chapters on ambient air quality, industrial emissions, and hazardous waste toxicology.",
    colorClass: "from-brand/10 to-highlight/15"
  },
  "/testimonials": {
    tag: "Client Endorsements",
    title: "Trusted Across Heavy Industry",
    subtitle: "Anonymised feedback from operators, environmental managers, and clients in cement, petroleum, textiles, and energy grids.",
    colorClass: "from-highlight/15 to-emerald-500/10"
  }
};

export function PageBanner() {
  const pathname = usePathname() || "";

  // Bypass on Homepage and Admin pages
  if (pathname === "/" || pathname.startsWith("/admin")) {
    return null;
  }

  // Detect dynamic subpages (e.g. /services/[slug] or /blogs/[slug])
  const segments = pathname.split("/").filter(Boolean);
  const isDetailPage = segments.length > 1;
  const parentRoute = `/${segments[0]}`;
  const currentSlug = segments[segments.length - 1];

  // Try to find matching pre-defined configuration
  const config = bannerData[pathname];

  // Make human readable titles for dynamic slugs
  const formattedSlug = currentSlug
    ? currentSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  // Clean label for parent route
  const getParentLabel = (route: string) => {
    switch (route) {
      case "/services": return "Services";
      case "/blogs": return "Blogs";
      default: return route.slice(1).charAt(0).toUpperCase() + route.slice(1).slice(1);
    }
  };

  // RENDER DYNAMIC DETAIL MINIMAL BREADCRUMB HEADER
  if (isDetailPage) {
    return (
      <div className="relative border-b border-border bg-card/15 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
          {/* Active Path Breadcrumbs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-brand flex items-center gap-1 transition-colors">
              <Home className="size-3.5" />
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href={parentRoute} className="hover:text-brand transition-colors">
              {getParentLabel(parentRoute)}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground max-w-[200px] sm:max-w-xs truncate font-bold">
              {formattedSlug}
            </span>
          </div>

          {/* Quick Back Action */}
          <Link 
            href={parentRoute}
            className="group flex items-center gap-1 hover:text-brand transition-colors font-bold shrink-0"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Link>
        </div>
      </div>
    );
  }

  // If top-level page has no custom config, fallback safely
  if (!config) {
    return null;
  }

  return (
    <div className="relative overflow-hidden border-b border-border bg-card/30 dark:bg-card/15 py-12 sm:py-16 backdrop-blur-sm">
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />
      <div className={`absolute top-0 -right-40 -left-40 h-full bg-gradient-to-b ${config.colorClass} blur-3xl opacity-60 pointer-events-none`} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb Path Links */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
          <Link href="/" className="hover:text-brand flex items-center gap-1 transition-colors">
            <Home className="size-3.5" /> Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-brand uppercase tracking-wider font-extrabold">
            {getParentLabel(parentRoute)}
          </span>
        </div>

        {/* Dynamic Title Card */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 dark:bg-brand-soft/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest text-brand">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            {config.tag}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            {config.title.split(" ").map((word, idx, arr) => {
              // Highlight the last word or specific terms
              const isHighlight = idx >= arr.length - 2;
              return (
                <span key={idx} className={isHighlight ? "text-brand inline-block" : "inline-block mr-2"}>
                  {word}
                  {idx < arr.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal max-w-3xl">
            {config.subtitle}
          </p>
        </div>

      </div>
    </div>
  );
}
