import { Sparkles, BookOpen, Languages } from "lucide-react";

export function Certs() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="size-10 grid place-items-center rounded-xl bg-brand-gradient text-brand-foreground">
          <Sparkles className="size-5" />
        </div>
        <div className="mt-4 font-semibold">English Access Micro-Scholarship</div>
        <div className="text-sm text-muted-foreground">
          A two-year program by the U.S. Consulate focused on advanced English communication and leadership.
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="size-10 grid place-items-center rounded-xl bg-highlight text-highlight-foreground">
          <BookOpen className="size-5" />
        </div>
        <div className="mt-4 font-semibold">Published Author</div>
        <div className="text-sm text-muted-foreground">
          Book chapter contributor in <em>Advances and Challenges in Hazardous Waste Management</em>.
        </div>
      </div>
      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex items-center gap-2">
          <Languages className="size-5 text-brand" />
          <div className="font-semibold">Languages</div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["English", "Urdu", "Punjabi"].map((l) => (
            <span key={l} className="rounded-full bg-brand-soft text-brand px-3 py-1 text-sm font-medium">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
