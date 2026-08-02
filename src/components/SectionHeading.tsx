export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-8 sm:mb-14">
      <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-mint/70 mb-2 sm:mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-muted-foreground max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
