"use client";

/* 
  global-error.tsx must include its own <html> and <body> tags.
  It replaces the root layout entirely when a critical error occurs.
  We inline all styles since globals.css may not be available.
*/

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <title>Something Went Wrong | Farhan Ali</title>
        <meta
          name="description"
          content="An unexpected error occurred. Please try again."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={styles.body}>
        {/* Radial glow backdrop */}
        <div style={styles.glow} aria-hidden />

        <main style={styles.main}>
          {/* Animated error illustration */}
          <div style={styles.illustrationWrap}>
            {/* Spinning dashed ring */}
            <div style={styles.outerRing} />
            <div style={styles.innerRing} />

            {/* Warning triangle SVG */}
            <svg
              viewBox="0 0 80 80"
              fill="none"
              style={styles.warningSvg}
              aria-hidden
            >
              {/* Triangle */}
              <path
                d="M40 10 L72 65 L8 65 Z"
                stroke="#2d9f93"
                strokeWidth="3"
                strokeLinejoin="round"
                fill="none"
                opacity="0.7"
              />
              {/* Exclamation mark */}
              <line
                x1="40"
                y1="30"
                x2="40"
                y2="48"
                stroke="#2d9f93"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="40" cy="56" r="2.5" fill="#2d9f93" />
            </svg>

            {/* Pulsing dots */}
            {[
              { left: "10%", top: "25%", delay: "0s", size: 6 },
              { left: "82%", top: "18%", delay: "0.7s", size: 5 },
              { left: "78%", top: "72%", delay: "1.4s", size: 4 },
              { left: "15%", top: "70%", delay: "0.3s", size: 5 },
            ].map((dot, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: dot.left,
                  top: dot.top,
                  width: dot.size,
                  height: dot.size,
                  borderRadius: "50%",
                  background: "rgba(45,159,147,0.35)",
                  animation: `errorFloat 5s ease-in-out ${dot.delay} infinite`,
                }}
              />
            ))}
          </div>

          <h1 style={styles.heading}>Something Went Wrong</h1>

          <p style={styles.description}>
            A critical error occurred while loading this page. This has been
            logged and our team will look into it. In the meantime, you can try
            again or return to the homepage.
          </p>

          {error.digest && (
            <p style={styles.digest}>
              Error ID:{" "}
              <code style={styles.digestCode}>{error.digest}</code>
            </p>
          )}

          {/* Actions */}
          <div style={styles.actions}>
            <button onClick={() => reset()} style={styles.retryBtn}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Try Again
            </button>

            <a href="/" style={styles.homeLink}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Back to Home
            </a>
          </div>
        </main>

        {/* Keyframe animations */}
        <style>{`
          @keyframes errorSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes errorSpinReverse {
            from { transform: rotate(360deg); }
            to   { transform: rotate(0deg); }
          }
          @keyframes errorFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
            50%      { transform: translateY(-14px) scale(1.4); opacity: 0.9; }
          }
          @keyframes errorPulse {
            0%, 100% { opacity: 0.65; }
            50%      { opacity: 1; }
          }
          body {
            margin: 0;
          }
          button:hover, a:hover {
            transform: translateY(-1px);
          }
        `}</style>
      </body>
    </html>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline Styles                                                     */
/* ------------------------------------------------------------------ */
const brand = "#2d9f93";
const brandDark = "#1e7a70";
const bgDark = "#0f1a20";
const textPrimary = "#e8f0ee";
const textSecondary = "#8daab2";

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
    background: `linear-gradient(170deg, ${bgDark} 0%, #0a1218 60%, #0d1e22 100%)`,
    color: textPrimary,
    WebkitFontSmoothing: "antialiased",
    overflow: "hidden",
    position: "relative",
  },

  glow: {
    position: "absolute",
    top: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 700,
    height: 500,
    borderRadius: "50%",
    background: `radial-gradient(ellipse at center, ${brand}22 0%, transparent 70%)`,
    pointerEvents: "none",
  },

  main: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem 1.5rem",
    maxWidth: 520,
  },

  illustrationWrap: {
    position: "relative",
    width: 200,
    height: 200,
    marginBottom: "1.5rem",
  },

  outerRing: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: `2px dashed ${brand}33`,
    animation: "errorSpin 35s linear infinite",
  },

  innerRing: {
    position: "absolute",
    inset: 30,
    borderRadius: "50%",
    border: `1.5px solid ${brand}1a`,
    animation: "errorSpinReverse 50s linear infinite",
  },

  warningSvg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 80,
    height: 80,
    animation: "errorPulse 3s ease-in-out infinite",
  },

  heading: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: "0 0 0.75rem",
    background: `linear-gradient(135deg, ${textPrimary} 0%, ${brand} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  description: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: textSecondary,
    margin: "0 0 1rem",
    maxWidth: 440,
  },

  digest: {
    fontSize: "0.75rem",
    color: textSecondary,
    margin: "0 0 1.5rem",
    opacity: 0.7,
  },

  digestCode: {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    background: `${brand}15`,
    padding: "2px 8px",
    borderRadius: 6,
    fontSize: "0.7rem",
    color: brand,
  },

  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    justifyContent: "center",
  },

  retryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#fff",
    background: `linear-gradient(135deg, ${brand} 0%, ${brandDark} 100%)`,
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    boxShadow: `0 4px 14px -3px ${brand}55`,
    transition: "all 0.2s ease",
  },

  homeLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: textPrimary,
    background: `rgba(255,255,255,0.06)`,
    border: `1px solid rgba(255,255,255,0.1)`,
    borderRadius: 12,
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
};
