import { Hero } from "@/components/sections/home/hero";
import { StatsBento } from "@/components/sections/home/stats-bento";
import { ServicesTeaser } from "@/components/sections/home/services-teaser";
import { BlogTeaser } from "@/components/sections/home/blog-teaser";
import { CTA } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBento />
      <ServicesTeaser />
      <BlogTeaser />
      <CTA />
    </>
  );
}
