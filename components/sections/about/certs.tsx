import { Sparkles, BookOpen, Languages, Landmark, Globe, Check } from "lucide-react";
import { PreviewableImage } from "./previewable-image";

export function Certs() {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-stretch">
      {/* Detail Columns */}
      <div className="md:col-span-7 flex flex-col justify-between space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card/65 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:border-brand/35 hover:shadow-md dark:bg-card/45">
            <div className="size-11 grid place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10">
              <Sparkles className="size-5.5" />
            </div>
            <h4 className="mt-4 font-bold text-base text-foreground">English Access Scholarship</h4>
            <div className="text-xs text-brand font-semibold mt-1">U.S. Consulate Program</div>
            <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A two-year intensive leadership and communications program focused on professional English, global diplomacy, and civic values.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/65 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:border-brand/35 hover:shadow-md dark:bg-card/45">
            <div className="size-11 grid place-items-center rounded-xl bg-highlight text-highlight-foreground">
              <BookOpen className="size-5.5" />
            </div>
            <h4 className="mt-4 font-bold text-base text-foreground">Published Book Contributor</h4>
            <div className="text-xs text-brand font-semibold mt-1">Scientific Press</div>
            <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Co-authored a technical book chapter in the volume <em>Advances and Challenges in Hazardous Waste Management</em>.
            </p>
          </div>
        </div>

        {/* Languages section card */}
        <div className="rounded-2xl border border-border bg-card/65 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:border-brand/35 hover:shadow-md dark:bg-card/45">
          <div className="flex items-center gap-2 border-b border-border/60 pb-3">
            <Globe className="size-4.5 text-brand" />
            <h4 className="font-bold text-sm sm:text-base text-foreground">Languages & Communication</h4>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              { lang: "English", level: "Professional Working" },
              { lang: "Urdu", level: "Native / Bilingual" },
              { lang: "Punjabi", level: "Native / Bilingual" }
            ].map((item) => (
              <span 
                key={item.lang} 
                className="inline-flex items-center gap-2 rounded-xl bg-brand-soft/60 px-3.5 py-2 text-xs font-semibold text-brand dark:bg-brand-soft/10 hover:scale-[1.03] transition-all duration-200 border border-brand/10 hover:border-brand/30"
              >
                <div className="size-4 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-[8px]">
                  <Check className="size-2.5" />
                </div>
                <span>{item.lang} <span className="opacity-60 text-[10px] font-normal">({item.level})</span></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Publications Showcase Image */}
      <div className="md:col-span-5 relative group min-h-[280px] md:min-h-auto">
        <div className="absolute inset-0 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-3 h-full shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <PreviewableImage
              src="/images/farhan-ali-website-20.webp"
              alt="Scientific Publications and Research Archives - Hazardous Waste & Stack Emissions Chapters"
              className="object-cover"
              sizes="(max-w-7xl) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white z-20">
              <div className="text-xs font-bold uppercase tracking-wider opacity-85">Academic & Research Publishing</div>
              <div className="text-[10px] opacity-75 mt-0.5">Hazardous Waste & Stack Emissions Chapters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

