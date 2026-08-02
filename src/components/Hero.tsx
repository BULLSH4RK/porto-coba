import { motion, stagger, fadeUp, useScrollReveal } from "@/hooks/useScrollReveal"
import { profile } from "@/lib/data"

export function Hero() {
  const reveal = useScrollReveal()
  const linkStyles: Record<string, string> = {
    mint: "glass-hover glass-mint text-foreground",
    solid: "bg-mint text-[#23212C] hover:bg-mint/85 font-bold",
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <motion.div
        {...reveal}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong relative max-w-5xl w-full rounded-[40px] p-8 md:p-14 overflow-hidden"
      >
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-mint/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div variants={fadeUp} className="relative shrink-0">
            <div className="absolute -inset-2 rounded-[32px] bg-mint/20 blur-2xl" />
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-3xl rotate-6 bg-gradient-to-tr from-mint/40 to-white/10 p-px shadow-2xl">
              <div className="w-full h-full bg-void rounded-[22px] overflow-hidden flex items-center justify-center">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 text-center md:text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mint mb-3">
              {profile.role}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-2">
              {profile.name.split(" ")[0]}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-mint via-mint/80 to-white text-glow">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
              {profile.tagline} berbasis di {profile.location}. {profile.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-sm transition-all ${linkStyles[link.accent]}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-3 mt-12 pt-8 border-t border-border"
        >
          {profile.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center md:text-left">
              <p className="font-display text-lg md:text-2xl font-bold text-mint">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
