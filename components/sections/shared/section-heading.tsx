export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand">{eyebrow}</div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
