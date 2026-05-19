import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/blogs", label: "Blogs" },
  { href: "/testimonials", label: "Testimonials" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center size-9 rounded-xl bg-brand-gradient text-brand-foreground shadow-md transition-transform group-hover:rotate-6">
            <Leaf className="size-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">Farhan Ali</div>
            <div className="text-[11px] text-muted-foreground -mt-0.5">Environmental Engineer</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "text-brand bg-brand-soft" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-highlight px-4 py-2 text-sm font-semibold text-highlight-foreground shadow-sm transition-all hover:scale-[1.03] hover:shadow-md"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="lg:hidden grid place-items-center size-10 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  pathname === l.href ? "text-brand bg-brand-soft" : "text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-highlight px-4 py-2 text-sm font-semibold text-highlight-foreground"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
