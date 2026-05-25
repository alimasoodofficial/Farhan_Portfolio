"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Wind,
  FlaskConical,
  ShieldCheck,
  ClipboardList,
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  Settings,
  Database,
  Calendar,
  CheckCircle2,
  Bookmark,
  Share2,
  Copy,
  Check,
  Award,
  BookOpen
} from "lucide-react";

interface CoreService {
  title: string;
  desc: string;
}

interface ToolAndTech {
  name: string;
  type: string;
}

interface CaseStudy {
  title: string;
  location: string;
  challenge: string;
  solution: string;
  result: string;
}

interface ServiceDetails {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  overviewText: string;
  image: string;
  metric: { value: string; label: string };
  coreServices: CoreService[];
  toolsAndTech: ToolAndTech[];
  relatedFields: string[];
  caseStudy: CaseStudy;
  icon: React.ComponentType<any>;
  color: string;
}

export default function ServiceDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Bar Update
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

  // Full detailed service mappings
  const servicesMap: Record<string, ServiceDetails> = {
    "stack-emissions-ambient-air-monitoring": {
      slug: "stack-emissions-ambient-air-monitoring",
      title: "Stack Emissions & Ambient Air Quality Monitoring",
      tag: "Emissions Diagnostics",
      tagline: "EPA-compliant point source and ambient tracking validated via digital telemetry.",
      overviewText: "Continuous Emissions Monitoring Systems (CEMS) are no longer optional for major industrial plants under modern environmental regulations. Strict EPA methodologies govern stack testing frequencies, analyzer calibration specifications, and real-time telemetry. I provide end-to-end field calibration, analyzer diagnostics, and communications integrations to keep your plant in flawless compliance with NCEC and municipal environmental standards.",
      image: "/images/farhan-ali-website-27.webp",
      metric: { value: "100%", label: "NCEC Telemetry Connection Uptime" },
      icon: Wind,
      color: "from-blue-500/10 to-brand/10",
      coreServices: [
        { title: "Class A Continuous Telemetry & Integration", desc: "Setting up, validating, and direct-linking telemetry systems via Modbus TCP or OPC-UA to the regulator's portal." },
        { title: "Ambient Air Station Calibration", desc: "Deploying and calibrating community air-monitoring units to track PM2.5, PM10, SO2, NOx, CO, and Ozone." },
        { title: "Cylinder Gas & Linearity Audits", desc: "Conducting standard calibration gas audits and stack nozzle alignment tests in compliance with EPA Methods." }
      ],
      toolsAndTech: [
        { name: "Met One BAM-1020", type: "Beta Attenuation Monitor" },
        { name: "Thermo iQ Series", type: "Gas Analyzers (SO2, NOx, CO)" },
        { name: "AERMOD Air Dispersion", type: "Dispersion Modeling Software" },
        { name: "EPA Method 5 & 201A", type: "Stack Dust Samplers" }
      ],
      relatedFields: [
        "Air Dispersion Modeling",
        "Stack Height Optimization",
        "Industrial Toxicology",
        "Modbus / Telemetry Engineering"
      ],
      caseStudy: {
        title: "Class A Stack Telemetry Compliance Overhaul",
        location: "Yanbu Industrial Complex, Saudi Arabia",
        challenge: "A major chemical manufacturer was encountering sudden communication gaps and drift alarms inside the government NCEC portal, risking immediate compliance fines.",
        solution: "Conducted calibration checks, installed a smart heater module for inlet moisture control, and restructured the PLC telemetry data logging intervals to buffer packet loss.",
        result: "Eliminated false compliance alerts entirely with zero data gaps over a 12-month period."
      }
    },
    "eia-iee": {
      slug: "eia-iee",
      title: "Environmental Impact Assessments & IEE",
      tag: "Environmental Planning",
      tagline: "Strategic baseline profiling and impact assessments to secure regulatory clearances.",
      overviewText: "Environmental Impact Assessments (EIA) and Initial Environmental Examinations (IEE) represent the crucial gatekeeper phase of any new industrial or construction investment. By combining geological, atmospheric, acoustic, and ecological field data, I design complete mitigation plans that shield local ecosystems and streamline official government licensing cycles.",
      image: "/images/farhan-ali-website-11.webp",
      metric: { value: "20+", label: "Category 3 & Mega EIA Clearances" },
      icon: FlaskConical,
      color: "from-brand/10 to-highlight/10",
      coreServices: [
        { title: "Baseline Air, Soil & Noise Profiling", desc: "Conducting multi-day baseline sampling campaigns to establish pre-project pollution concentrations." },
        { title: "Acoustic & Thermal Dispersion Modeling", desc: "Simulating heavy industrial noise corridors, stack plume spreads, and marine thermal discharge profiles." },
        { title: "Regulator Panel Representation", desc: "Formally presenting and defending environmental impact mitigation designs in front of regulatory approval bodies." }
      ],
      toolsAndTech: [
        { name: "SoundPLAN 3D", type: "Acoustic Noise Simulation" },
        { name: "ArcGIS Spatial Mapping", type: "Ecological Baseline Profiling" },
        { name: "ICP-MS Analyzer", type: "Soil & Water Heavy Metal Assay" },
        { name: "Calibrated Decibel Meters", type: "Noise Level Diagnostics" }
      ],
      relatedFields: [
        "Hydrogeological Surveys",
        "Plume Plentitude Modeling",
        "Industrial Acoustics Mitigation",
        "Public Stakeholder Liaison"
      ],
      caseStudy: {
        title: "Cement Facility Expansion Clearance",
        location: "Riyadh Industrial Zone, Saudi Arabia",
        challenge: "A major cement plant's 35% capacity expansion project was stalled due to regulatory concerns regarding regional particulate dust accumulation over close agricultural belts.",
        solution: "Developed high-accuracy particulate dispersion plots, proposed dedicated smart containment scrubbers, and presented a detailed mitigation program directly to NCEC auditors.",
        result: "Secured full Category 3 EIA operational approval in under 60 days, beating the plant's schedule."
      }
    },
    "ncec-neqs-compliance-audits": {
      slug: "ncec-neqs-compliance-audits",
      title: "NCEC & NEQS Compliance Audits",
      tag: "Regulatory Audits",
      tagline: "Rigorous gap reviews and priority roadmaps to eliminate environmental liability.",
      overviewText: "Maintaining industrial operations requires strict adherence to dynamic bylaws. Navigating Saudi Arabia's NCEC Executive Bylaws and Pakistan's National Environmental Quality Standards (NEQS) demands field-level expertise. My environmental compliance audits identify facility gaps and deliver actionable engineering roadmaps to protect your operations.",
      image: "/images/farhan-ali-website-13.webp",
      metric: { value: "100%", label: "Spot-Inspection Audit Success Rate" },
      icon: ShieldCheck,
      color: "from-emerald-500/10 to-brand/10",
      coreServices: [
        { title: "Regulatory Gap Auditing", desc: "Systematic on-site checks mapping chemical storage, stack elevations, telemetry links, and discharge pipelines." },
        { title: "Prioritized Remediations Design", desc: "Developing cost-effective plant adjustments sorted by environmental risk, so engineering budgets are optimized." },
        { title: "Staff Audit Prep Drills", desc: "Training plant managers and technical operators on how to handle government inspectors and documentation reviews." }
      ],
      toolsAndTech: [
        { name: "NCEC Compliance bylaws", type: "KSA Standard Codebook" },
        { name: "NEQS Threshold Codes", type: "Pakistan Standard Matrix" },
        { name: "ISO 14001:2015 Checklist", type: "Quality Management Auditing" },
        { name: "Risk Assessment Matrices", type: "Engineering Analysis Tools" }
      ],
      relatedFields: [
        "Hazardous Waste Accounting",
        "Wastewater Auditing Protocols",
        "Environmental Liability Mapping",
        "Operational Staff Safety"
      ],
      caseStudy: {
        title: "Petrochemical Complex Audit Alignment",
        location: "Jubail Industrial City, Saudi Arabia",
        challenge: "A downstream polymer unit had been flagged by internal compliance leads for secondary ventilation vents and chemical drum storage configuration issues.",
        solution: "Led a comprehensive site review, mapped all 15 chemical handling storage blocks, and designed standard localized collection berms to exceed NCEC guidelines.",
        result: "Successfully cleared the next official municipal inspector spot check with absolute zero citations."
      }
    },
    "emp-permitting": {
      slug: "emp-permitting",
      title: "EMP & Permitting Solutions",
      tag: "Operations & Licenses",
      tagline: "Actionable environmental plans and streamlined environmental license renewals.",
      overviewText: "An Environmental Management Plan (EMP) should not just sit on a shelf gathering dust. It should be a practical guide built into your facility's daily workflows. I design site-specific EMPs and coordinate permit renewals, waste licensing, and regulator liaison so your plant can operate smoothly and uninterrupted.",
      image: "/images/farhan-ali-website-21.webp",
      metric: { value: "0", label: "Permit Expiration or Licensing Delays" },
      icon: ClipboardList,
      color: "from-highlight/10 to-emerald-500/10",
      coreServices: [
        { title: "Operational EMP Blueprinting", desc: "Structuring actionable daily, weekly, and monthly monitoring lists customized for chemical, cement, and power facilities." },
        { title: "Permit Renewal Calendaring", desc: "Tracking and compiling technical renewal submittals for industrial stack, water discharge, and solid waste permits." },
        { title: "Environmental Agency Correspondence", desc: "Directly addressing technical queries, permit requests, and draft revisions from environmental agencies." }
      ],
      toolsAndTech: [
        { name: "EMP Control Calendars", type: "Regulatory Database trackers" },
        { name: "Environmental Audit Kits", type: "Field Evaluation Systems" },
        { name: "Solid Waste Trackers", type: "Logistics Audit Protocols" },
        { name: "ISO 14001 Templates", type: "Operational Management Standards" }
      ],
      relatedFields: [
        "Waste Minimization Planning",
        "Industrial Water Recycling",
        "Regulatory Document Management",
        "Circular Economy Strategies"
      ],
      caseStudy: {
        title: "Power Facility License Restoration",
        location: "Lahore Province, Pakistan",
        challenge: "A thermal plant was approaching a critical operations permit renewal deadline under tight municipal wastewater discharge bylaws.",
        solution: "Drafted an updated site EMP detailing localized chemical neutralization systems and online water quality telemetry to satisfy regional inspectors.",
        result: "Secured complete operating license renewal for a standard 3-year term with zero downtime."
      }
    }
  };

  // Fallback to stack emissions if slug is invalid/missing
  const service = servicesMap[slug] || servicesMap["stack-emissions-ambient-air-monitoring"];
  const ServiceIcon = service.icon;

  // Gather other services for a quick navigation sidebar
  const otherServices = Object.values(servicesMap).filter(s => s.slug !== service.slug);

  return (
    <section className="relative overflow-hidden min-h-screen pt-12 pb-24 z-0">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-brand z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 size-96 rounded-full bg-brand/10 dark:bg-brand/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 size-96 rounded-full bg-highlight/15 dark:bg-highlight/10 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-12">
        
        {/* Hero Segment */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Hero Content Column (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 dark:bg-brand-soft/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-brand">
              <span className="size-2 rounded-full bg-brand animate-pulse" />
              {service.tag}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight text-balance">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-brand font-semibold leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {service.overviewText}
            </p>

            {/* Quick Interactions Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/80">
              <button 
                onClick={handleCopyLink} 
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 text-xs font-bold text-foreground hover:bg-muted transition-all"
              >
                {copied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5 text-brand" />}
                {copied ? "Link Copied!" : "Copy Share Link"}
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById("advisory-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:underline"
              >
                Book Consultation <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Hero Visual Column with Metrics (Col span 5) */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Background Gradient for Visual Card */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand/10 to-highlight/20 opacity-35 blur-2xl group-hover:scale-[1.02] transition-transform duration-500 -z-10" />

            <div className="relative rounded-3xl border border-border bg-card/65 backdrop-blur-md p-3.5 shadow-xl hover:border-brand/40 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Icon Emblem inside Image */}
                <div className="absolute bottom-4 left-4 size-12 rounded-xl bg-brand-gradient text-brand-foreground flex items-center justify-center shadow-lg border border-white/10">
                  <ServiceIcon className="size-6" />
                </div>
              </div>

              {/* Outstanding Metric Highlights Footer */}
              <div className="mt-4 rounded-2xl bg-muted/65 p-4 border border-border/80 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-brand-soft text-brand dark:bg-brand/20 flex items-center justify-center shrink-0">
                  <Award className="size-5" />
                </div>
                <div>
                  <div className="font-display font-black text-lg text-foreground leading-none">
                    {service.metric.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-semibold mt-1 uppercase tracking-wider">
                    {service.metric.label}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Detail Sections layout */}
        <div className="mt-20 grid lg:grid-cols-4 gap-12">
          
          {/* Main Core services & Tech specs (Col span 3) */}
          <div className="lg:col-span-3 space-y-12 min-w-0">
            
            {/* Core Capabilities */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground flex items-center gap-2.5">
                <span className="text-brand">01.</span> Core Capabilities & Deliverables
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every project I manage is governed by strict engineering quality controls. Here are the specific operational outcomes and deliverables included in this service module:
              </p>

              <div className="grid sm:grid-cols-3 gap-5">
                {service.coreServices.map((cs, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl border border-border bg-card/45 backdrop-blur-sm shadow-sm hover:border-brand/35 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="size-8 rounded-lg bg-brand-soft text-brand dark:bg-brand/10 flex items-center justify-center font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <h4 className="font-bold text-sm text-foreground leading-snug">{cs.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cs.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-brand font-bold mt-4 pt-2 border-t border-border/60">
                      <CheckCircle2 className="size-3.5" /> Conforming Deliverable
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools, Instrumentation & Standards */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground flex items-center gap-2.5">
                <span className="text-brand">02.</span> Instrumentation, Tools & Quality Standards
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Precision is key when dealing with high-exposure compliance frameworks. I leverage calibrated industrial diagnostics, standard software simulations, and verified chemical-physical analyzers.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.toolsAndTech.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/25 hover:border-brand/30 transition-colors"
                  >
                    <div className="size-10 rounded-lg bg-brand/5 border border-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Cpu className="size-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-foreground leading-none">{tool.name}</h5>
                      <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-1 block">
                        {tool.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In-depth Project Case Study (High Impact Card) */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground flex items-center gap-2.5">
                <span className="text-brand">03.</span> Field Proof: Real-World Implementation
              </h2>
              
              <div className="rounded-3xl border border-brand/20 bg-brand-soft/20 dark:bg-brand-soft/5 backdrop-blur-md p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 size-40 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand block">Project Case History</span>
                    <h3 className="font-display text-xl font-extrabold text-foreground mt-1">{service.caseStudy.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-xs font-bold text-muted-foreground">
                    📍 {service.caseStudy.location}
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">The Operational Challenge</div>
                    <p className="text-xs leading-relaxed text-foreground">{service.caseStudy.challenge}</p>
                  </div>
                  
                  <div className="space-y-1.5 border-t sm:border-t-0 sm:border-x border-border/60 sm:px-6 pt-4 sm:pt-0">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-brand">The Technical Action</div>
                    <p className="text-xs leading-relaxed text-foreground">{service.caseStudy.solution}</p>
                  </div>

                  <div className="space-y-1.5 border-t sm:border-t-0 pt-4 sm:pt-0">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500">The Quantified Result</div>
                    <p className="text-xs leading-relaxed text-foreground font-semibold text-emerald-600 dark:text-emerald-400">{service.caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Fields */}
            <div className="space-y-4">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Related Regulatory & Engineering Disciplines</div>
              <div className="flex flex-wrap gap-2.5">
                {service.relatedFields.map((field, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-3.5 py-2 text-xs font-bold text-foreground dark:bg-black/10 dark:border-white/5 transition-all duration-200 hover:border-brand/40 hover:-translate-y-0.5"
                  >
                    <div className="size-1.5 rounded-full bg-brand" />
                    <span>{field}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Navigation (Col span 1) */}
          <div className="hidden lg:block space-y-8">
            <div className="sticky top-24 space-y-6">
              
              {/* Other Services Selector */}
              <div className="rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 dark:bg-card/45">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-brand mb-4 flex items-center gap-1.5">
                  <Bookmark className="size-3.5" /> All Services
                </h4>
                <nav className="space-y-3">
                  {Object.values(servicesMap).map((s) => {
                    const isActive = s.slug === service.slug;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`group flex items-start gap-2 text-left w-full text-xs font-semibold transition-colors duration-200 ${isActive ? 'text-brand' : 'text-muted-foreground hover:text-brand'}`}
                      >
                        <ChevronRight className={`size-3.5 shrink-0 text-brand mt-0.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <span>{s.title}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Free Consulting Call Pitch */}
              <div className="rounded-3xl border border-border bg-card/65 backdrop-blur-md p-6 dark:bg-card/45 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-brand animate-ping" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand">Advisory Hub</span>
                </div>
                <h4 className="font-display text-sm font-bold text-foreground leading-snug">Need specific audit validation at your facility?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I specialize in Saudi Arabia NCEC environmental compliance regulations, stack continuous emissions telemetry setups, and modular EMP solutions.
                </p>
                <button 
                  onClick={() => {
                    const el = document.getElementById("advisory-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-[11px] font-bold text-brand-foreground hover:bg-brand-dark transition-all w-full justify-center"
                >
                  Schedule Advisory Call <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Global CTA Advisory Section */}
        <div id="advisory-section" className="mt-24 pt-12 border-t border-border/80">
          <div className="rounded-3xl border border-brand/20 bg-brand-soft/20 dark:bg-brand-soft/5 backdrop-blur-md p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 size-80 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand">Direct Consultation</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Evaluate your facility's environmental roadmap.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you need a quick pre-inspection checklist, automated continuous stack monitoring integration, or a newly compiled site-wide EMP, let's coordinate a call.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-4 text-xs font-bold text-brand-foreground hover:bg-brand-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Diagnostic Consultation <ArrowRight className="size-4" />
              </Link>
              <button 
                onClick={handleCopyLink} 
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-4 text-xs font-bold text-foreground hover:bg-muted transition-all"
              >
                <Share2 className="size-4 text-brand" /> Share Service Info
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
