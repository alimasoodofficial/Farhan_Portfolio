import { GraduationCap, Award, Languages, BookOpen, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div>
        <div className="text-xs font-semibold tracking-widest uppercase text-brand">About me</div>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">The engineer behind the readings.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          I work where data, regulation and heavy machinery meet — so industries can keep moving without choking the air.
        </p>
      </div>

      <div className="grid gap-16">
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold tracking-tight border-b pb-3 border-border">
            Overview
          </h2>
          <Overview />
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold tracking-tight border-b pb-3 border-border">
            Education & Awards
          </h2>
          <CV />
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold tracking-tight border-b pb-3 border-border">
            Certifications & Publications
          </h2>
          <Certs />
        </section>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <h2 className="font-display text-2xl font-bold">Hi, I'm Farhan 👋</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          I'm an Environmental Specialist & Engineer currently based in Saudi Arabia. My day-to-day
          revolves around <span className="text-foreground font-medium">stack emissions testing</span>,
          {" "}<span className="text-foreground font-medium">ambient air quality monitoring</span>, and
          keeping clients aligned with <span className="text-foreground font-medium">NCEC</span> and
          {" "}<span className="text-foreground font-medium">NEQS</span> standards. I've worked across
          cement, petroleum, automotive, hydropower and healthcare — so I've seen most of the
          smokestacks Pakistan and KSA have to offer.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Outside of fieldwork, I write, mentor, and occasionally win awards for solar-powered dryers.
        </p>
      </div>
      <div className="rounded-2xl bg-brand-gradient p-6 text-brand-foreground shadow-md transition-all hover:shadow-lg">
        <div className="text-sm opacity-80">Currently</div>
        <div className="mt-1 font-display text-xl font-bold">Environmental Specialist</div>
        <div className="mt-1 text-sm opacity-90">Renewable Environmental Company (REC), KSA</div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl bg-black/10 p-3">
            <div className="font-display text-2xl font-extrabold">4+</div>
            <div className="text-[11px] opacity-80">Years</div>
          </div>
          <div className="rounded-xl bg-highlight text-highlight-foreground p-3">
            <div className="font-display text-2xl font-extrabold">20+</div>
            <div className="text-[11px]">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CV() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand">
            <GraduationCap className="size-5" />
          </div>
          <div className="flex-1">
            <div className="font-display text-lg font-bold">B.Sc. in Environmental Engineering</div>
            <div className="text-sm text-muted-foreground">University of Agriculture, Faisalabad</div>

            <div className="mt-5 rounded-xl bg-highlight-soft p-4 border border-highlight/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand">Final Year Project</div>
              <div className="mt-1 font-semibold">
                Solarization of Thermal Power Source of Fluidized Bed Dryer
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Designed and tested a flat-plate solar collector array that delivered a stable
                <span className="font-semibold text-foreground"> 70–80°C</span> thermal output to replace
                conventional fuel for fluidized bed drying — cutting emissions while keeping throughput steady.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg">
        <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
          <div className="size-11 grid place-items-center rounded-xl bg-highlight text-highlight-foreground">
            <Award className="size-5" />
          </div>
          <div>
            <div className="font-display text-lg font-bold">1st Prize — World Engineers Day</div>
            <div className="text-sm text-muted-foreground">
              National engineering competition recognising the solar dryer project for its real-world
              sustainability impact.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Certs() {
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
