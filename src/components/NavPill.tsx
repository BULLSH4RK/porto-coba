import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function NavPill() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Listen to scroll to highlight active item
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-fit md:max-w-max">
      {/* Desktop Navigation Pill */}
      <nav className="hidden md:flex glass-strong px-5 py-2.5 rounded-full items-center gap-6 shadow-2xl backdrop-blur-xl border border-mint/15">
        <a
          href="#home"
          className="font-display font-bold text-mint text-base tracking-tight mr-2 flex items-center gap-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
          AY<span className="text-muted-foreground">.</span>
        </a>

        <div className="flex items-center gap-5">
          {navItems.slice(0, 5).map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold tracking-wide transition-all duration-300 relative py-1 ${
                  isActive ? "text-mint font-bold" : "text-foreground/70 hover:text-mint"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activePillIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-mint rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <a
          href="#contact"
          className="bg-mint text-[#23212C] px-4 py-1.5 rounded-full text-xs font-bold hover:bg-mint/85 transition-all transform hover:scale-105 shadow-md ml-1"
        >
          Hire Me
        </a>
      </nav>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden w-full max-w-md mx-auto">
        <div className="glass-strong px-4 py-2.5 rounded-full flex items-center justify-between shadow-2xl backdrop-blur-xl border border-mint/15">
          <a
            href="#home"
            className="font-display font-bold text-mint text-base tracking-tight flex items-center gap-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
            AY<span className="text-muted-foreground">.</span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="bg-mint text-[#23212C] px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-mint/85 transition-colors"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-foreground/80 hover:text-mint hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-mint"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-mint" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Glass Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="glass-strong mt-2 p-3 rounded-3xl border border-mint/20 shadow-2xl backdrop-blur-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-mint/15 text-mint border border-mint/30"
                          : "text-foreground/80 hover:bg-white/5 hover:text-mint"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-mint" />}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
