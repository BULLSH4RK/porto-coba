export function AuroraOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="mint-grid-bg absolute inset-0 opacity-60" />
      <div className="absolute top-[-12%] left-[-8%] w-[40vw] h-[40vw] min-w-[260px] min-h-[260px] max-w-[520px] max-h-[520px] rounded-full bg-mint/10 blur-[100px] animate-orb-drift" />
      <div className="absolute bottom-[8%] right-[-6%] w-[36vw] h-[36vw] min-w-[220px] min-h-[220px] max-w-[440px] max-h-[440px] rounded-full bg-mint/8 blur-[110px] animate-orb-drift-slow" />
      <div className="absolute top-[42%] right-[22%] w-[24vw] h-[24vw] min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px] rounded-full bg-white/6 blur-[90px] animate-orb-drift" style={{ animationDelay: "-9s" }} />
      <div className="absolute bottom-[30%] left-[12%] w-[21vw] h-[21vw] min-w-[130px] min-h-[130px] max-w-[260px] max-h-[260px] rounded-full bg-mint/6 blur-[80px] animate-orb-drift-slow" style={{ animationDelay: "-14s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(35,33,44,0.6)_100%)]" />
    </div>
  )
}