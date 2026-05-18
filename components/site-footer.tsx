import Link from "next/link";
import { Leaf, Mail, MapPin, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-brand-soft/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-xl bg-brand text-brand-foreground">
              <Leaf className="size-5" />
            </span>
            <div className="font-display font-bold text-lg">Farhan Ali</div>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Environmental Specialist & Engineer — helping industries meet compliance,
            cut emissions, and build a greener tomorrow.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-brand" /> Saudi Arabia</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="size-4 text-brand" /> farhan@example.com</span>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-brand">About</Link></li>
            <li><Link href="/experience" className="hover:text-brand">Experience</Link></li>
            <li><Link href="/services" className="hover:text-brand">Services</Link></li>
            <li><Link href="/research" className="hover:text-brand">Research</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Connect</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/contact" className="hover:text-brand">Book a consultation</Link></li>
            <li><Link href="/blogs" className="hover:text-brand">Read the blog</Link></li>
            <li>
              <a href="#" className="inline-flex items-center gap-1.5 hover:text-brand">
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Farhan Ali. All rights reserved.</div>
          <div>Crafted with care · Built for a cleaner planet 🌱</div>
        </div>
      </div>
    </footer>
  );
}
