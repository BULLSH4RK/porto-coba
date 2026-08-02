import { motion, fadeUp, stagger, useScrollReveal } from "@/hooks/useScrollReveal"
import { SectionHeading } from "./SectionHeading"
import { skills } from "@/lib/data"

const categoryColor: Record<string, string> = {
  Dev: "text-mint border-mint/30 bg-mint/10",
  Sec: "text-red-300 border-red-300/30 bg-red-300/10",
  Math: "text-sky-300 border-sky-300/30 bg-sky-300/10",
}

export function Skills() {
  const reveal = useScrollReveal()

  return (
    <section id="skills" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Core"
          description="Alat dan konsep yang saya gunakan untuk membangun dan menguji sistem."
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            variants={fadeUp}
            className="glass glass-hover rounded-2xl p-5 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-mono text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-md ${
                  categoryColor[skill.category] ?? "text-muted-foreground border-border bg-white/5"
                }`}
              >
                {skill.category}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {"★".repeat(skill.level)}
                <span className="text-muted-foreground/30">{"★".repeat(5 - skill.level)}</span>
              </span>
            </div>
            <p className="font-display text-sm font-semibold text-foreground">{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
