export function Overview() {
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
