import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/site-layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
