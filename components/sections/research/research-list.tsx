import { ExternalLink, BookOpen, Calendar } from "lucide-react";

export function ResearchList() {
  const articles = [
    {
      type: "Book chapter",
      bookTitle: "Advances and Challenges in Hazardous Waste Management",
      publisher: "IntechOpen · 2024",
      publishDate: "Published Jan 15, 2024",
      title: "Air Pollution from Industrial Emissions and Its Control in Pakistan: Current Situation, Challenges and Way Forward",
      desc: "A focused look at the state of industrial emissions across Pakistan's key sectors — the regulatory gaps, monitoring realities on the ground, and the practical controls that can actually scale.",
      tags: ["Air pollution", "Industrial emissions", "Pakistan", "Policy"],
      link: "https://www.intechopen.com/",
    },
  ];

  return (
    <div className="mt-10 space-y-6">
      {articles.map((art) => (
        <article
          key={art.title}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all hover:shadow-lg"
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto bg-brand-gradient p-8 flex flex-col justify-between text-brand-foreground">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-highlight text-highlight-foreground px-3 py-1 text-xs font-semibold">
                  <BookOpen className="size-3.5" /> {art.type}
                </div>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="font-display text-xl font-bold">{art.bookTitle}</div>
                <div className="text-sm opacity-80 mt-1">{art.publisher}</div>
              </div>
            </div>
            <div className="md:col-span-3 p-8">
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="size-3.5" /> {art.publishDate}
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-balance">
                {art.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {art.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {art.tags.map((t) => (
                  <span key={t} className="rounded-full bg-brand-soft text-brand px-3 py-1 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={art.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-all hover:scale-[1.03] shadow-md"
                >
                  Read on IntechOpen <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
