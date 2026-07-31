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
    <div className="mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint/70 mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
