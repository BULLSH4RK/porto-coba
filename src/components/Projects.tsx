import { motion, fadeUp, stagger, useScrollReveal } from "@/hooks/useScrollReveal"
import { SectionHeading } from "./SectionHeading"
import { projects } from "@/lib/data"

export function Projects() {
  const reveal = useScrollReveal()

  return (
    <section id="projects" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="02 · Portfolio"
          title="Featured Works"
          description="Proyek yang sedang saya garap dan kerjakan — dari sistem kasir hingga eksploitasi web."
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            className={`glass glass-hover rounded-[32px] p-8 ${
              project.size === "lg" ? "md:col-span-2" : ""
            }`}
          >
            {project.size === "lg" ? (
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  {project.status && (
                    <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-mint bg-mint/10 border border-mint/20 px-2.5 py-1 rounded-full mb-4">
                      {project.status}
                    </span>
                  )}
                  <h4 className="font-display text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground bg-white/5 border border-border px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-44 md:h-44 shrink-0 bg-white/4 rounded-2xl border border-border flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                  <span className="text-5xl">{project.emoji}</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-10 h-10 rounded-xl bg-mint/15 border border-mint/20 flex items-center justify-center mb-6 text-lg">
                  {project.emoji}
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xs font-bold text-mint hover:underline mb-4"
                  >
                    View Profile →
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-muted-foreground bg-white/5 border border-border px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
