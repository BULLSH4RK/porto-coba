import { useState, type FormEvent } from "react"
import { motion, fadeUp, stagger, useScrollReveal } from "@/hooks/useScrollReveal"
import { SectionHeading } from "./SectionHeading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { profile } from "@/lib/data"

export function Contact() {
  const reveal = useScrollReveal()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact dari ${name || "Pengunjung"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Punya proyek menarik, challenge CTF, atau sekadar ingin menyapa? Kirim pesan langsung."
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        <motion.div variants={fadeUp} className="glass glass-hover rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:col-span-2">
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Langsung ke saya</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            Jangan ragu untuk menghubungi saya — saya selalu terbuka untuk diskusi, kolaborasi,
            dan peluang baru.
          </p>
          <div className="space-y-3 sm:space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="block glass-mint rounded-2xl p-3.5 sm:p-4 hover:border-mint/30 transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-mint/70 mb-1">Email</p>
              <p className="text-xs sm:text-sm font-medium text-foreground break-all">{profile.email}</p>
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block glass-mint rounded-2xl p-3.5 sm:p-4 hover:border-mint/30 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-mint/70 mb-1">Social</p>
                <p className="text-xs sm:text-sm font-medium text-foreground">{link.label}</p>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="glass rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:col-span-3 space-y-4 sm:space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm text-muted-foreground">
                Nama
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                required
                className="bg-white/5 border-border rounded-xl h-11 sm:h-12 text-sm focus-visible:ring-mint"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs sm:text-sm text-muted-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kamu@email.com"
                required
                className="bg-white/5 border-border rounded-xl h-11 sm:h-12 text-sm focus-visible:ring-mint"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs sm:text-sm text-muted-foreground">
              Pesan
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ceritakan tentang proyek atau ide kamu..."
              required
              rows={5}
              className="bg-white/5 border-border rounded-2xl resize-none text-sm focus-visible:ring-mint"
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto bg-mint text-[#23212C] hover:bg-mint/85 font-bold rounded-xl h-11 sm:h-12 px-8 text-xs sm:text-sm"
          >
            Kirim Pesan
          </Button>
        </motion.form>
      </motion.div>
    </section>
  )
}
