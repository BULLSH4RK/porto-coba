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
    <section id="contact" className="relative py-24 px-6 max-w-6xl mx-auto">
      <motion.div {...reveal}>
        <SectionHeading
          eyebrow="05 · Contact"
          title="Let's build something"
          description="Punya proyek menarik, challenge CTF, atau sekadar ingin menyapa? Kirim pesan langsung."
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
      >
        <motion.div variants={fadeUp} className="glass glass-hover rounded-[32px] p-8 lg:col-span-2">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Langsung ke saya</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Jangan ragu untuk menghubungi saya — saya selalu terbuka untuk diskusi, kolaborasi,
            dan peluang baru.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="block glass-amber rounded-2xl p-4 hover:border-mint/30 transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-amber/70 mb-1">Email</p>
              <p className="text-sm font-medium text-foreground break-all">{profile.email}</p>
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block glass-amber rounded-2xl p-4 hover:border-mint/30 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-amber/70 mb-1">Social</p>
                <p className="text-sm font-medium text-foreground">{link.label}</p>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="glass rounded-[32px] p-8 lg:col-span-3 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-muted-foreground">
                Nama
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                required
                className="bg-white/5 border-border rounded-xl h-12 focus-visible:ring-mint"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kamu@email.com"
                required
                className="bg-white/5 border-border rounded-xl h-12 focus-visible:ring-mint"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm text-muted-foreground">
              Pesan
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ceritakan tentang proyek atau ide kamu..."
              required
              rows={6}
              className="bg-white/5 border-border rounded-2xl resize-none focus-visible:ring-mint"
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto bg-amber text-[#23212C] hover:bg-amber/85 font-bold rounded-xl h-12 px-8"
          >
            Kirim Pesan
          </Button>
        </motion.form>
      </motion.div>
    </section>
  )
}
