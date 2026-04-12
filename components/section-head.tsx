export function SectionHead({
  chapter,
  label,
  children,
}: {
  chapter: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <header className="relative grid md:grid-cols-12 gap-6 md:gap-10">
      <aside className="md:col-span-3 flex items-center md:items-start gap-4 md:gap-0 md:flex-col">
        <span className="display-italic text-gold text-3xl md:text-4xl">{chapter}</span>
        <span className="hidden md:block h-px w-12 bg-gold/40 my-4" />
        <span className="md:hidden h-px flex-1 bg-gold/40" />
        <span className="eyebrow-muted">{label}</span>
      </aside>
      <h2 className="md:col-span-9 display-light text-[clamp(2.5rem,7vw,7rem)] text-bone leading-[0.94] tracking-tight max-w-5xl">
        {children}
      </h2>
    </header>
  );
}
