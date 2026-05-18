import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/site-layout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Farhan Ali — Environmental Specialist & Engineer",
  description:
    "Portfolio of Farhan Ali — Environmental Specialist & Engineer based in Saudi Arabia. NCEC/NEQS compliance, stack testing, ambient air monitoring, EIA, and EMP.",
  authors: [{ name: "Farhan Ali" }],
  keywords: [
    "Environmental Specialist",
    "Environmental Engineer",
    "Saudi Arabia",
    "NCEC compliance",
    "NEQS compliance",
    "stack testing",
    "ambient air monitoring",
    "EIA",
    "EMP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
