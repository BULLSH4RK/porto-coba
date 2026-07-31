import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          &copy; 2026 {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">
          Built with React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  )
}
