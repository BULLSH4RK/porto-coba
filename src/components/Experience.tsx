import { motion, fadeUp, stagger, useScrollReveal } from "@/hooks/useScrollReveal"
import { SectionHeading } from "./SectionHeading"
import { experiences } from "@/lib/data"

export function Experience() {
  const reveal = useScrollReveal()

  return (
    <section id="experience" className="relative py-16 sm:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl xl:max-w-7xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="Journey"
          title="Experience"
          description="Perjalanan belajar dan membangun — dari CTF player hingga fullstack developer."
        />
      </motion.div>

      <div className="relative">
        <div className="absolute left-[13px] sm:left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mint/40 via-border to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6 sm:space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              className={`relative flex gap-4 sm:gap-6 lg:gap-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="absolute left-[13px] sm:left-4 lg:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-mint shadow-[0_0_12px_rgba(241,254,200,0.6)]" />
              <div
                className={`lg:w-1/2 pl-9 sm:pl-12 lg:pl-0 ${
                  index % 2 === 0 ? "lg:pr-14 lg:text-right" : "lg:pl-14"
                }`}
              >
                <div className="glass glass-hover rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 inline-block text-left w-full">
                  <p className="font-mono text-[10px] sm:text-[11px] text-mint uppercase tracking-widest mb-1.5 sm:mb-2">
                    {exp.period}
                  </p>
                  <h4 className="font-display text-base sm:text-lg font-bold text-foreground">{exp.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 mb-2 sm:mb-3">{exp.org}</p>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
