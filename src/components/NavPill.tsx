const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
]

export function NavPill() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-fit">
      <div className="glass-strong px-5 py-2.5 rounded-full flex items-center gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <a
          href="#home"
          className="font-display font-bold text-mint text-sm tracking-tight mr-1"
        >
          AY<span className="text-muted-foreground">.</span>
        </a>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs font-semibold text-foreground/70 hover:text-mint transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-mint text-[#23212C] px-4 py-1.5 rounded-full text-xs font-bold hover:bg-mint/85 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
