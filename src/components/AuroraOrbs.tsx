export function AuroraOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="amber-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute top-[-12%] left-[-8%] w-[520px] h-[520px] rounded-full bg-amber/10 blur-[100px] animate-orb-drift" />
      <div className="absolute bottom-[8%] right-[-6%] w-[440px] h-[440px] rounded-full bg-amber/8 blur-[110px] animate-orb-drift-slow" />
      <div className="absolute top-[42%] right-[22%] w-[300px] h-[300px] rounded-full bg-white/6 blur-[90px] animate-orb-drift" style={{ animationDelay: "-9s" }} />
      <div className="absolute bottom-[30%] left-[12%] w-[260px] h-[260px] rounded-full bg-amber/6 blur-[80px] animate-orb-drift-slow" style={{ animationDelay: "-14s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(35,33,44,0.6)_100%)]" />
    </div>
  )
}
