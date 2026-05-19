import { Overview } from "@/components/sections/about/overview";
import { CV } from "@/components/sections/about/cv";
import { Certs } from "@/components/sections/about/certs";

export const metadata = {
  title: "About — Farhan Ali",
  description: "Learn more about Farhan Ali, Environmental Specialist & Engineer.",
};

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
