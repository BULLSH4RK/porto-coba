import { AuroraOrbs } from "./components/AuroraOrbs"
import { NavPill } from "./components/NavPill"
import { GlassmorphismPortfolioBlock } from "./components/ui/glassmorphism-portfolio-block-shadcnui"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <AuroraOrbs />
      <div className="relative z-10">
        <NavPill />
        <main>
          <GlassmorphismPortfolioBlock />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
