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
    <div className="mb-8 sm:mb-10 md:mb-14">
      <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-mint/70 mb-2 sm:mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-bold text-foreground leading-tight">
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