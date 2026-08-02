import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground">
          &copy; 2026 {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground/60">
          Built with React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  )
}
