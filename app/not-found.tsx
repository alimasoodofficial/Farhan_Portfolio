import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Farhan Ali",
  description:
    "The page you're looking for doesn't exist or has been moved.",
};

/* ------------------------------------------------------------------ */
/*  Animated 404 Illustration (Server Component — CSS-only animation) */
/* ------------------------------------------------------------------ */
function NotFoundIllustration() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto select-none">
      {/* Subtle grid background */}
      <div className="absolute inset-0 rounded-3xl bg-grid opacity-30" />

      {/* Animated glow ring */}
      <div className="absolute inset-4 rounded-full border-2 border-dashed border-brand/20 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-10 rounded-full border border-brand/10 animate-[spin_60s_linear_infinite_reverse]" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Big 404 */}
        <span className="font-display text-[7rem] sm:text-[8rem] font-extrabold leading-none bg-gradient-to-br from-brand via-brand-dark to-brand bg-clip-text text-transparent drop-shadow-sm select-none">
          404
        </span>

        {/* Broken leaf icon */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          className="w-16 h-16 -mt-3 text-brand/50"
          aria-hidden
        >
          {/* Left half of leaf */}
          <path
            d="M32 56 C32 56 10 44 10 24 C10 12 20 6 32 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-[pulse_3s_ease-in-out_infinite]"
            opacity="0.6"
          />
          {/* Right half of leaf — shifted to indicate "broken" */}
          <path
            d="M34 54 C34 54 54 42 54 22 C54 10 44 4 34 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-[pulse_3s_ease-in-out_infinite_0.5s]"
            opacity="0.4"
          />
          {/* Center vein — dashed */}
          <line
            x1="32"
            y1="8"
            x2="32"
            y2="56"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Floating particles */}
      {[
        { size: 6, x: "15%", y: "20%", delay: "0s", dur: "6s" },
        { size: 4, x: "75%", y: "15%", delay: "1s", dur: "7s" },
        { size: 5, x: "80%", y: "70%", delay: "2s", dur: "5s" },
        { size: 3, x: "20%", y: "75%", delay: "0.5s", dur: "8s" },
        { size: 4, x: "50%", y: "85%", delay: "1.5s", dur: "6s" },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-brand/20"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            animation: `float ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* CSS keyframes (scoped via style tag) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50%      { transform: translateY(-18px) scale(1.3); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
      {/* Decorative radial gradient */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--brand) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <NotFoundIllustration />

      <h1 className="mt-6 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground text-base sm:text-lg text-balance">
        The page you&apos;re looking for doesn&apos;t exist, has been moved, or
        is temporarily unavailable. Let&apos;s get you back on track.
      </p>

      {/* Action buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
        >
          <Home className="size-4" />
          Back to Home
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:scale-[1.02]"
        >
          <Search className="size-4" />
          Explore Services
        </Link>
      </div>

      {/* Breadcrumb hint */}
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-brand transition-colors"
      >
        <ArrowLeft className="size-3" />
        farhanali.com
      </Link>
    </section>
  );
}
