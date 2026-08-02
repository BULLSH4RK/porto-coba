import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Code2, Flag, Mail, Users } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

type Highlight = {
  title: string;
  description: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "CTF & Web Exploitation",
    description:
      "Cheese CTF (LFI-to-RCE), Hextroadinary, dan berbagai tantangan web exploitation di TryHackMe.",
  },
  {
    title: "Systems built",
    description:
      "POS mobile Flutter dengan SQLite, web POS dengan RBAC, dan integrasi LLM lokal — end-to-end.",
  },
  {
    title: "Availability",
    description:
      "Terbuka untuk kolaborasi proyek, diskusi keamanan siber, dan peluang freelance.",
  },
];

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
    handle: "adityayudha.works@gmail.com",
    href: "mailto:adityayudha.works@gmail.com",
    icon: Mail,
  },
];

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
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-8 backdrop-blur-2xl md:p-12"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-mint/40 bg-mint/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-mint backdrop-blur transition-colors hover:bg-mint/20"
              >
                Portfolio Insight
              </Badge>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                >
                  Aditya Yudha Hari Pratama, Cybersecurity & Fullstack Developer
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-md"
                >
                  Mahasiswa IT di Telkom University yang menggabungkan rasa
                  ingin tahu terhadap keamanan siber dengan keterampilan
                  membangun perangkat lunak. Dari CTF di TryHackMe hingga
                  membangun sistem POS yang aman dan efisien.
                </motion.p>
              </div>

              {/* Highlights grid */}
              <div className="grid gap-4 sm:grid-cols-1">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-5 backdrop-blur transition-all hover:border-mint/40 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                    <div className="relative space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mint/70">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

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
                  className="h-12 w-full gap-2 rounded-full bg-mint px-8 text-sm uppercase tracking-[0.25em] text-[#23212C] transition-all hover:bg-mint/85 hover:shadow-lg sm:w-auto"
                >
                  View my work
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-mint/15 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border/50 bg-background/60 p-8 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/20 blur-2xl" />
                    <img
                      src={profileImage}
                      alt="Aditya Yudha Hari Pratama"
                      className="relative h-32 w-32 rounded-full border border-border/40 object-cover shadow-[0_25px_60px_rgba(15,23,42,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-1"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      Aditya Yudha
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mint/70">
                      Cybersecurity · Fullstack
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70"
                  >
                    Building secure systems from CTF to production — fokus pada
                    web exploitation dan pengembangan aplikasi yang aman.
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-8 flex flex-col gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-mint/40 hover:bg-background/80 hover:shadow-md"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint shadow-[0_10px_30px_rgba(15,23,42,0.2)] transition-all group-hover:shadow-[0_10px_30px_rgba(15,23,42,0.3)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {social.label}
                            </p>
                            <p className="text-xs text-foreground/60">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint/70" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
