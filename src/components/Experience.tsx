import { motion, fadeUp, stagger, useScrollReveal } from "@/hooks/useScrollReveal"
import { SectionHeading } from "./SectionHeading"
import { experiences } from "@/lib/data"

export function Experience() {
  const reveal = useScrollReveal()

  return (
    <section id="experience" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="04 · Journey"
          title="Experience"
          description="Perjalanan belajar dan membangun — satu langkah setiap hari."
        />
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mint/40 via-border to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              className={`relative flex gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-mint shadow-[0_0_12px_rgba(241,254,200,0.6)]" />
              <div
                className={`md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
                }`}
              >
                <div className="glass glass-hover rounded-[24px] p-6 inline-block text-left w-full">
                  <p className="font-mono text-[11px] text-mint uppercase tracking-widest mb-2">
                    {exp.period}
                  </p>
                  <h4 className="font-display text-lg font-bold text-foreground">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">{exp.org}</p>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
