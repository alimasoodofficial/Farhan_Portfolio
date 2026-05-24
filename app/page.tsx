import { Hero } from "@/components/sections/home/hero";
import { StatsBento } from "@/components/sections/home/stats-bento";
import { AboutTeaser } from "@/components/sections/home/about-teaser";
import { ServicesTeaser } from "@/components/sections/home/services-teaser";
import { ExperienceTeaser } from "@/components/sections/home/experience-teaser";
import { ResearchTeaser } from "@/components/sections/home/research-teaser";
import { BlogTeaser } from "@/components/sections/home/blog-teaser";
import { CTA } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBento />
      <AboutTeaser />
      <ServicesTeaser />
      <ExperienceTeaser />
      <ResearchTeaser />
      <BlogTeaser />
      <CTA />
    </>
  );
}


