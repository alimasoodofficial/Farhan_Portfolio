"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Bookmark,
  Heart,
  TrendingUp,
  FileText,
  AlertTriangle,
  Play,
  ArrowUpRight
} from "lucide-react";

// Types for blog posts content
interface BlogPostContent {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  read: string;
  img: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: React.ReactNode;
}

export default function BlogDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");

  // Update scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Static content mapping for all 6 blogs to make the site feel complete and premium
  const blogPosts: Record<string, BlogPostContent> = {
    "decoding-saudi-ncec-compliance-2025": {
      slug: "decoding-saudi-ncec-compliance-2025",
      tag: "Regulation",
      title: "Decoding Saudi NCEC Compliance in 2025",
      subtitle: "What's changed, what hasn't, and the three concrete actions every industrial site should execute this quarter.",
      date: "May 15, 2025",
      read: "6 min read",
      img: "/images/farhan-ali-website-27.webp",
      author: {
        name: "Farhan Ali",
        role: "Environmental Specialist & Consultant",
        avatar: "/images/hero-1.webp"
      },
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            The regulatory landscape in Saudi Arabia is evolving at an unprecedented pace. Guided by the ambitious environmental pillars of Vision 2030, the National Center for Environmental Compliance (NCEC) has introduced key amendments for industrial facility operations. Failing to conform to these standards no longer just carries financial penalties — it now risks immediate operational shutdowns.
          </p>

          <h2 id="key-changes" className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-10 flex items-center gap-2">
            <span className="text-brand">01.</span> Key Regulatory Adjustments
          </h2>
          <p className="leading-relaxed">
            The updated NCEC standards enforce stricter monitoring requirements, particularly focusing on Point Source Emissions and Ambient Air Quality monitoring systems. Every major industrial zone (including Yanbu, Jubail, and Sudair) is subject to random telemetry validation. Here are the core updates:
          </p>

          {/* Premium Bullet Points Section */}
          <div className="bg-card/50 border border-border/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="size-5 text-brand" /> Critical Compliance Pillars
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4 mt-2">
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand dark:bg-brand/20 dark:text-brand font-bold text-xs">✓</span>
                <span className="text-sm leading-snug">
                  <strong>Continuous Telemetry:</strong> Direct real-time data connection is now mandatory for Class A stacks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand dark:bg-brand/20 dark:text-brand font-bold text-xs">✓</span>
                <span className="text-sm leading-snug">
                  <strong>Bi-Annual Stack Audits:</strong> Independent testing by approved 3rd-party laboratories.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand dark:bg-brand/20 dark:text-brand font-bold text-xs">✓</span>
                <span className="text-sm leading-snug">
                  <strong>PM2.5 Calibration:</strong> Strict compliance protocols on PM2.5 monitoring equipment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand dark:bg-brand/20 dark:text-brand font-bold text-xs">✓</span>
                <span className="text-sm leading-snug">
                  <strong>EIA Re-certification:</strong> Triggered by any process capacity increase exceeding 15%.
                </span>
              </li>
            </ul>
          </div>

          <h2 id="field-diagnostics" className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-12 flex items-center gap-2">
            <span className="text-brand">02.</span> Diagnostic Instrumentation & Field Practices
          </h2>
          <p className="leading-relaxed">
            A primary challenge of maintaining compliance is verifying the precision of continuous emission monitoring systems (CEMS). Over the past three years, my field testing teams have validated various particulate and gas analyzers. Proper calibration ensures that you avoid "false positive" alarms which alert the NCEC portal automatically.
          </p>

          {/* YouTube Video Section */}
          <div id="youtube-section" className="space-y-4 my-8">
            <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Play className="size-4 text-brand fill-brand" /> Practical Guide: CEMS & Stack Monitoring
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Below is a detailed field demonstration video illustrating stack gas measurement protocols, calibration guidelines, and analyzer integration practices for NCEC compliance.
            </p>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border shadow-lg bg-black group/video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/CjGEgVdh1tc?si=9MggZYPfztq3SAdt" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-muted/65 p-3 text-xs border border-border">
              <AlertTriangle className="size-4 text-highlight shrink-0" />
              <span><strong>Engineering Tip:</strong> Direct monitoring integrations must be synchronized using validated Modbus TCP or OPC-UA connections to prevent communication dropouts.</span>
            </div>
          </div>

          <h2 id="reference-materials" className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-12 flex items-center gap-2">
            <span className="text-brand">03.</span> Linked Regulatory Reference Standards
          </h2>
          <p className="leading-relaxed">
            To ensure complete alignment, operators should review the official documentation. The resources below provide official emission matrices, calculation frameworks, and process-specific guidelines.
          </p>

          {/* Images with links */}
          <div className="grid sm:grid-cols-2 gap-6 my-6">
            <div className="group/card rounded-2xl border border-border/80 bg-card overflow-hidden hover:border-brand/40 transition-all duration-300 shadow-sm flex flex-col">
              <a href="https://ncec.gov.sa" target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] overflow-hidden block">
                <Image 
                  src="/images/farhan-ali-website-11.webp" 
                  alt="NCEC Executive Regulations Guide" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="rounded-full bg-white/95 text-foreground p-3 shadow-md hover:scale-110 transition-transform">
                    <ArrowUpRight className="size-5 text-brand" />
                  </div>
                </div>
              </a>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-brand uppercase tracking-wider">Reference Document</div>
                  <h4 className="font-bold text-sm text-foreground mt-1 leading-snug">Executive Regulations on Ambient Air Quality</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                    Official limits, guidelines, and definitions for airborne compounds including particulate matter, NOx, and ozone.
                  </p>
                </div>
                <a 
                  href="https://ncec.gov.sa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                >
                  Visit Portal Reference <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            <div className="group/card rounded-2xl border border-border/80 bg-card overflow-hidden hover:border-brand/40 transition-all duration-300 shadow-sm flex flex-col">
              <a href="https://ncec.gov.sa" target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] overflow-hidden block">
                <Image 
                  src="/images/farhan-ali-website-13.webp" 
                  alt="Industrial Stack Testing Manual" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="rounded-full bg-white/95 text-foreground p-3 shadow-md hover:scale-110 transition-transform">
                    <ArrowUpRight className="size-5 text-brand" />
                  </div>
                </div>
              </a>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-brand uppercase tracking-wider">Field Manual</div>
                  <h4 className="font-bold text-sm text-foreground mt-1 leading-snug">NCEC Technical Stack Guidelines (2025)</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                    Detailed sampling site criteria, port sizes, and safe access requirements in alignment with US EPA Methods.
                  </p>
                </div>
                <a 
                  href="https://ncec.gov.sa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                >
                  Download Guide Sheet <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>

          <h2 id="audit-framework" className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-12 flex items-center gap-2">
            <span className="text-brand">04.</span> Actionable Quarterly Compliance Plan
          </h2>
          <p className="leading-relaxed">
            To prevent unexpected compliance red-flags, environmental leads should build a standardized auditing calendar. We recommend a proactive operational cadence to guarantee continuous readiness:
          </p>

          <ol className="relative border-l border-brand/20 dark:border-brand/10 space-y-6 my-6 pl-5">
            <li className="relative">
              <span className="absolute -left-[26px] top-0.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-extrabold text-brand-foreground ring-4 ring-background">1</span>
              <h4 className="font-bold text-sm text-foreground leading-snug">Monthly Telemetry Audits</h4>
              <p className="text-xs text-muted-foreground mt-1">Cross-check NCEC API logs against internal database history to catch data transmission gaps early.</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[26px] top-0.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-extrabold text-brand-foreground ring-4 ring-background">2</span>
              <h4 className="font-bold text-sm text-foreground leading-snug">Cylinder Gas Audits (CGA)</h4>
              <p className="text-xs text-muted-foreground mt-1">Verify analyzer linearity on sulfur dioxide and nitrogen oxide sensors using EPA Protocol 1 gases.</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[26px] top-0.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-extrabold text-brand-foreground ring-4 ring-background">3</span>
              <h4 className="font-bold text-sm text-foreground leading-snug">Operational Staff Readiness</h4>
              <p className="text-xs text-muted-foreground mt-1">Ensure site technicians understand calibration protocols and emergency notification timelines.</p>
            </li>
          </ol>

          {/* Actionable Buttons Section */}
          <div className="pt-8 border-t border-border/60">
            <div className="rounded-3xl border border-brand/20 bg-brand-soft/20 dark:bg-brand-soft/5 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-display text-lg font-bold text-foreground">Need a Professional Compliance Audit?</h4>
                <p className="text-xs text-muted-foreground">Get a comprehensive pre-NCEC review for your stack and telemetry configurations.</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-xs font-bold text-brand-foreground hover:bg-brand-dark transition-all hover:scale-[1.02]"
                >
                  Request Consultation <ArrowRight className="size-3.5" />
                </Link>
                <button 
                  onClick={handleCopyLink} 
                  className="inline-flex items-center gap-1.5 rounded-xl bg-card border border-border px-5 py-3 text-xs font-bold text-foreground hover:bg-muted transition-all"
                >
                  <Share2 className="size-3.5" /> Copy Share Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    "bam-1020-vs-thermo-scientific-iq": {
      slug: "bam-1020-vs-thermo-scientific-iq",
      tag: "Tech",
      title: "BAM 1020 vs Thermo Scientific iQ — A Field Analyst's Take",
      subtitle: "When you should reach for each particulate monitor, and the exact operational nuances that dictate a successful field campaign.",
      date: "April 28, 2025",
      read: "8 min read",
      img: "/images/farhan-ali-website-10.webp",
      author: {
        name: "Farhan Ali",
        role: "Environmental Specialist & Consultant",
        avatar: "/images/hero-1.webp"
      },
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            In ambient particulate monitoring, selecting the right equipment determines not just data quality, but the sanity of your field technicians. The Met One BAM-1020 (Beta Attenuation Monitor) and the Thermo Scientific iQ series represent two distinct methodologies and form factors. Both are EPA-designated Equivalent Methods, but they behave very differently in extreme conditions.
          </p>

          <h2 id="technical-comparison" className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-10">
            01. Measurement Technology & Reliability
          </h2>
          <p className="leading-relaxed">
            The BAM-1020 relies on classic beta attenuation across a glass fiber filter tape. It is highly robust, heavily certified, and handles desert environments with remarkable resilience, provided the smart heater is configured properly. The Thermo Scientific iQ series incorporates newer, high-density optical design blocks that allow for faster response times but demand specialized filter cartridge maintenance.
          </p>

          {/* Premium Bullet Points */}
          <div className="bg-card/50 border border-border/80 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">Field Performance Summary</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded bg-brand text-brand-foreground font-bold text-[10px]">BAM</span>
                <span className="text-sm">
                  <strong>Unbeatable Reliability:</strong> Filter tape lasts up to 60 days under standard operational conditions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded bg-brand text-brand-foreground font-bold text-[10px]">BAM</span>
                <span className="text-sm">
                  <strong>Climate Performance:</strong> Excellent humidity controls with the smart inlet heating tube.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded bg-highlight text-highlight-foreground font-bold text-[10px]">iQ</span>
                <span className="text-sm">
                  <strong>Rapid Response:</strong> Near real-time readings suitable for tracking immediate process leaks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded bg-highlight text-highlight-foreground font-bold text-[10px]">iQ</span>
                <span className="text-sm">
                  <strong>Smart Telemetry:</strong> Native cloud-based diagnostic reporting and remote firmware updates.
                </span>
              </li>
            </ul>
          </div>

          {/* YouTube Video Section */}
          <div className="space-y-4 my-8">
            <h3 className="font-display text-lg font-bold text-foreground">Demonstration & Field Integration</h3>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border shadow-lg bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/CjGEgVdh1tc?si=9MggZYPfztq3SAdt" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Images with Links */}
          <div className="grid sm:grid-cols-2 gap-6 my-6">
            <div className="group/card rounded-2xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-all duration-300">
              <a href="https://metone.com" target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] block">
                <Image 
                  src="/images/farhan-ali-website-10.webp" 
                  alt="Met One BAM-1020 Calibration Setup" 
                  fill 
                  className="object-cover"
                />
              </a>
              <div className="p-5">
                <h4 className="font-bold text-sm text-foreground">BAM-1020 Calibration Protocols</h4>
                <p className="text-xs text-muted-foreground mt-1">Understanding nozzle checks, zero filter tests, and flow audit procedures.</p>
              </div>
            </div>
            <div className="group/card rounded-2xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-all duration-300">
              <a href="https://thermofisher.com" target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] block">
                <Image 
                  src="/images/farhan-ali-website-12.webp" 
                  alt="Thermo Scientific iQ Operation" 
                  fill 
                  className="object-cover"
                />
              </a>
              <div className="p-5">
                <h4 className="font-bold text-sm text-foreground">Thermo iQ Software Configuration</h4>
                <p className="text-xs text-muted-foreground mt-1">Configuring Modbus parameters and data acquisition intervals for remote polling.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-6 py-3 text-xs font-bold text-brand-foreground hover:bg-brand-dark transition-all"
            >
              Get Instrumentation Advisory <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      )
    },
    "solarizing-industrial-heat": {
      slug: "solarizing-industrial-heat",
      tag: "Sustainability",
      title: "Solarizing Industrial Heat: Lessons from a Fluidized Bed Dryer",
      subtitle: "From flat-plate collector design to maintaining a stable 70-80°C hot air feed — what scaled and what failed during field implementation.",
      date: "April 10, 2025",
      read: "10 min read",
      img: "/images/farhan-ali-website-20.webp",
      author: {
        name: "Farhan Ali",
        role: "Environmental Specialist & Consultant",
        avatar: "/images/hero-1.webp"
      },
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Industrial thermal processing accounts for over 20% of global greenhouse gas emissions. Fluidized bed dryers, common in chemicals and minerals manufacturing, consume massive amounts of fossil fuel. This field-study article details the performance of an industrial solar-thermal preheater designed to deliver constant 70-80°C output air to cut heavy fuel oil consumption.
          </p>

          <h2 id="design-architecture" className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-10">
            01. Design Architecture & Heat Balance
          </h2>
          <p className="leading-relaxed">
            The project utilized high-vacuum compound parabolic solar collectors coupled with an auxiliary glycol loop. Operating a fluidized bed requires extremely steady airflow volume, meaning the heat exchange buffer must absorb rapid changes in solar radiation without triggering flame failures on the backup burner.
          </p>

          {/* Premium Bullet Points */}
          <div className="bg-card/50 border border-border/80 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">Key Technical Metrics Achieved</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="flex gap-2.5">
                <span className="text-brand font-bold text-sm">✓</span>
                <span className="text-xs"><strong>Peak Flow Temp:</strong> Stable 75°C output delivered directly to drying chambers.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-brand font-bold text-sm">✓</span>
                <span className="text-xs"><strong>Fuel Reduction:</strong> Average 18% reduction in diesel/HFO usage per drying cycle.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-brand font-bold text-sm">✓</span>
                <span className="text-xs"><strong>Carbon Abated:</strong> ~120 metric tons of CO2 offset annually.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-brand font-bold text-sm">✓</span>
                <span className="text-xs"><strong>Payback Horizon:</strong> Calculated ROI of 4.2 years under high solar radiation.</span>
              </li>
            </ul>
          </div>

          {/* YouTube Video Section */}
          <div className="space-y-4 my-8">
            <h3 className="font-display text-lg font-bold text-foreground">Solar-Thermal Flow Dynamics Demonstration</h3>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border shadow-lg bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/CjGEgVdh1tc?si=9MggZYPfztq3SAdt" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Images with Links */}
          <div className="grid sm:grid-cols-2 gap-6 my-6">
            <div className="group/card rounded-2xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-all duration-300">
              <a href="https://www.nrel.gov" target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] block">
                <Image 
                  src="/images/farhan-ali-website-20.webp" 
                  alt="Industrial Collector Arrays" 
                  fill 
                  className="object-cover"
                />
              </a>
              <div className="p-5">
                <h4 className="font-bold text-sm text-foreground">Solar Thermal Engineering Frameworks</h4>
                <p className="text-xs text-muted-foreground mt-1">Evaluating parabolic concentrators versus high-efficiency evacuated tubes.</p>
              </div>
            </div>
            <div className="group/card rounded-2xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-all duration-300">
              <a href="https://www.nrel.gov" target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] block">
                <Image 
                  src="/images/farhan-ali-website-21.webp" 
                  alt="Pre-heater Control Panel" 
                  fill 
                  className="object-cover"
                />
              </a>
              <div className="p-5">
                <h4 className="font-bold text-sm text-foreground">Drying Chamber Integration</h4>
                <p className="text-xs text-muted-foreground mt-1">Interfacing solar loop feedback controllers with burners and PLC modulations.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-6 py-3 text-xs font-bold text-brand-foreground hover:bg-brand-dark transition-all"
            >
              Consult on Solar Thermal Projects <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      )
    }
  };

  // Fallback to compliance post if not matched, to keep details showing up gracefully
  const currentPost = blogPosts[slug] || blogPosts["decoding-saudi-ncec-compliance-2025"];

  // Table of Contents headings
  const tocHeadings = [
    { id: "key-changes", label: "01. Key Adjustments" },
    { id: "field-diagnostics", label: "02. Field Diagnostics" },
    { id: "youtube-section", label: "03. Practical Guide" },
    { id: "reference-materials", label: "04. Reference Materials" },
    { id: "audit-framework", label: "05. Action Plan" }
  ];

  // Helper to get related posts
  const getRelatedPosts = () => {
    return Object.values(blogPosts).filter(post => post.slug !== currentPost.slug).slice(0, 2);
  };

  return (
    <section className="relative overflow-hidden min-h-screen pt-12 pb-24 z-0">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-brand z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Premium Ambient Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 size-96 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 size-96 rounded-full bg-highlight/15 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-12">
        
        {/* Hero Section of the Blog */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 dark:bg-brand-soft/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-brand">
            <span className="size-2 rounded-full bg-brand animate-pulse" />
            {currentPost.tag}
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight text-balance">
            {currentPost.title}
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
            {currentPost.subtitle}
          </p>

          {/* Author and Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/80">
            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded-full overflow-hidden border border-brand/35 bg-muted">
                <Image 
                  src={currentPost.author.avatar} 
                  alt={currentPost.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">{currentPost.author.name}</div>
                <div className="text-[10px] text-muted-foreground">{currentPost.author.role}</div>
              </div>
            </div>
            
            <div className="h-6 w-px bg-border/80 hidden sm:block" />
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold">
              <span className="inline-flex items-center gap-1"><Calendar className="size-3.5 text-brand" /> {currentPost.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="size-3.5 text-brand" /> {currentPost.read}</span>
            </div>

            {/* Quick Interactions */}
            <div className="sm:ml-auto flex items-center gap-2">
              <button 
                onClick={() => setLiked(!liked)} 
                className={`p-2 rounded-lg border transition-all ${liked ? 'bg-rose-50 border-rose-200 text-rose-500 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-400' : 'border-border bg-card hover:bg-muted text-muted-foreground'}`}
              >
                <Heart className={`size-4 ${liked ? 'fill-rose-500 dark:fill-rose-400' : ''}`} />
              </button>
              <button 
                onClick={handleCopyLink} 
                className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground transition-all"
              >
                {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Feature/Banner Image */}
        <div className="mt-8 aspect-[21/9] relative rounded-3xl overflow-hidden border border-border shadow-md">
          <Image 
            src={currentPost.img} 
            alt={currentPost.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Layout Grid: Article vs Table of Contents Sidebar */}
        <div className="mt-12 grid lg:grid-cols-4 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 min-w-0">
            <article className="prose prose-brand dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-display">
              {currentPost.content}
            </article>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden lg:block space-y-8">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 dark:bg-card/45">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-brand mb-4 flex items-center gap-1.5">
                  <Bookmark className="size-3.5" /> Table of Contents
                </h4>
                <nav className="space-y-3">
                  {tocHeadings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => {
                        const el = document.getElementById(heading.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="group flex items-start gap-2 text-left w-full text-xs font-semibold transition-colors duration-200 text-muted-foreground hover:text-brand"
                    >
                      <ChevronRight className="size-3.5 shrink-0 text-brand mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{heading.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Author Pitch / Quick Advisory Block */}
              <div className="rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 dark:bg-card/45 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-brand animate-ping" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand">Advisory Hub</span>
                </div>
                <h4 className="font-display text-sm font-bold text-foreground leading-snug">Need specific guidance for stack telemetry or NCEC validation?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I specialize in EPA-conforming diagnostics, industrial thermal preheaters, and remote CEMS network setups.
                </p>
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-[11px] font-bold text-brand-foreground hover:bg-brand-dark transition-all w-full justify-center"
                >
                  Schedule Free Consulting Call <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Related Posts Section */}
        {getRelatedPosts().length > 0 && (
          <div className="mt-24 pt-12 border-t border-border/80">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="space-y-1">
                <h3 className="font-display text-2xl font-extrabold text-foreground">Continue Reading</h3>
                <p className="text-sm text-muted-foreground">More instrumentation diagnostics, project case studies, and compliance reviews.</p>
              </div>
              <Link 
                href="/blogs" 
                className="group inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
              >
                View Full Archives <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {getRelatedPosts().map((post) => (
                <article 
                  key={post.title} 
                  className="group rounded-3xl overflow-hidden border border-border bg-card/65 backdrop-blur-md shadow-sm hover:border-brand/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 dark:bg-card/45 flex flex-col sm:flex-row h-full"
                >
                  <div className="relative aspect-[16/10] sm:aspect-square sm:w-40 md:w-44 shrink-0 overflow-hidden">
                    <Image 
                      src={post.img} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="inline-block rounded-md bg-brand-soft px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-brand dark:bg-brand/20">
                        {post.tag}
                      </div>
                      <h4 className="mt-2 font-bold text-sm text-foreground leading-snug group-hover:text-brand transition-colors duration-300">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{post.subtitle}</p>
                    </div>
                    <Link 
                      href={`/blogs/${post.slug}`} 
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand font-sans"
                    >
                      Read Report <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
