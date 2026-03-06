import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LiquidGradientBackground from '@/components/ui/flow-gradient-hero-section'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Events from './pages/Events'

function App() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col items-stretch text-white">
      {/* Full-page animated gradient background */}
      <LiquidGradientBackground isPaused={isPaused} />

      {/* Pause/Play Button — fixed top-right */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="fixed top-20 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg"
        aria-label={isPaused ? 'Play animation' : 'Pause animation'}
        title={isPaused ? 'Play animation' : 'Pause animation'}
      >
        {isPaused ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        )}
      </button>

      {/* Main content layer — above gradient */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
