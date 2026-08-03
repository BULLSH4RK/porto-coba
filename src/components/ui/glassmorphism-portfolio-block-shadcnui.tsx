import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight, Code2, Flag, Mail, Users } from "lucide-react"
import { profile, highlights } from "@/lib/data"

type SocialLink = {
  label: string
  handle: string
  href: string
  icon: LucideIcon
}

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "BULLSH4RK",
    href: "https://github.com/BULLSH4RK",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    handle: "Aditya Yudha Hari Pratama",
    href: "https://linkedin.com/in/aditya-yudha-hari-pratama-906621407",
    icon: Users,
  },
  {
    label: "TryHackMe",
    handle: "yoodha",
    href: "https://tryhackme.com/p/yoodha",
    icon: Flag,
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
]

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
}

export function GlassmorphismPortfolioBlock() {
  const [first, ...rest] = highlights

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-mint/10 bg-background/45 p-5 sm:p-8 md:p-12 backdrop-blur-2xl"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-8 min-w-0 lg:gap-12 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-6 sm:space-y-8 min-w-0">
              <Badge
                variant="outline"
                className="inline-flex max-w-full shrink-0 items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-mint/40 bg-mint/10 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-mint backdrop-blur transition-colors hover:bg-mint/20 xs:text-[10px] sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em] md:tracking-[0.25em]"
              >
                Portfolio Insight
              </Badge>

              <div className="space-y-3 sm:space-y-4 min-w-0">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-[28ch] break-words text-[clamp(1.4rem,3.5vw,2.25rem)] font-semibold tracking-tight text-foreground leading-snug"
                >
                  {profile.name}, {profile.role}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-foreground/70"
                >
                  {profile.bio}
                </motion.p>
              </div>

              {/* Highlights grid — full-bleed, no empty space */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className="grid gap-3 sm:gap-4"
              >
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-4 sm:p-5 backdrop-blur transition-all hover:border-mint/40 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                  <div className="relative space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-mint/70">
                      {first.title}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/70">
                      {first.description}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {rest.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-4 sm:p-5 backdrop-blur transition-all hover:border-mint/40 hover:shadow-lg flex flex-col"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                      <div className="relative flex-1 space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint/70">
                          {item.title}
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/70">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 gap-4"
              >
                <Button
                  size="lg"
                  onClick={() =>
                    window.open("https://github.com/BULLSH4RK", "_blank")
                  }
                  className="h-12 w-full gap-2 rounded-full bg-mint px-8 text-xs sm:text-sm uppercase tracking-[0.25em] text-void transition-all hover:bg-mint/85 hover:shadow-lg sm:w-auto"
                >
                  View my work
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative min-w-0">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-mint/15 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-mint/20 bg-background/60 p-5 sm:p-8 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4 sm:mb-6"
                  >
                    <div className="absolute left-1/2 top-1/2 h-28 w-28 sm:h-32 sm:w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/20 blur-2xl" />
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full border border-mint/40 object-cover shadow-[0_25px_60px_rgba(15,23,42,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-1"
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground truncate">
                      {profile.name.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    <p className="max-w-full text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em] break-all text-mint/70">
                      {profile.role}
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-foreground/70"
                  >
                    {profile.tagline} berbasis di {profile.location}.
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-6 sm:mt-8 flex flex-col gap-2.5 sm:gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-mint/20 bg-background/70 px-3.5 py-2.5 sm:px-4 sm:py-3 text-left transition-all hover:-translate-y-0.5 hover:border-mint/40 hover:bg-background/80 hover:shadow-md"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
                          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint shadow-[0_10px_30px_rgba(15,23,42,0.2)] transition-all group-hover:shadow-[0_10px_30px_rgba(15,23,42,0.3)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                              {social.label}
                            </p>
                            <p className="text-[11px] sm:text-xs text-foreground/60 truncate">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint/70" />
                      </motion.a>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}