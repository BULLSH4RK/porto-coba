import { motion, fadeUp, stagger, useScrollReveal } from "@/hooks/useScrollReveal"
import { SectionHeading } from "./SectionHeading"

const facts = [
  {
    title: "Keamanan Siber",
    text: "Memahami taktik offensive & defensive security lewat CTF dan lab praktis.",
  },
  {
    title: "Fullstack Development",
    text: "Membangun aplikasi dari frontend hingga backend, mobile hingga web.",
  },
  {
    title: "Problem Solving",
    text: "Basis matematika kuat: Teori Graph, Linear Algebra, dan Modular Arithmetic.",
  },
]

export function About() {
  const reveal = useScrollReveal()

  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="01 · About"
          title="Siapa saya"
          description="Mahasiswa IT di Telkom University yang menggabungkan rasa ingin tahu terhadap keamanan siber dengan keterampilan membangun perangkat lunak."
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {facts.map((fact) => (
          <motion.div
            key={fact.title}
            variants={fadeUp}
            className="glass glass-hover rounded-[28px] p-8"
          >
            <div className="w-10 h-10 rounded-xl bg-mint/15 border border-mint/20 flex items-center justify-center mb-5">
              <span className="w-3 h-3 rounded-full bg-mint animate-pulse" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">{fact.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{fact.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
