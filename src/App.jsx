import useHashRoute from './hooks/useHashRoute.js'
import Home from './pages/Home.jsx'
import Sources from './pages/Sources.jsx'
import AiUse from './pages/AiUse.jsx'
import Footer from './components/Footer.jsx'

const pages = { home: Home, sources: Sources, 'ai-use': AiUse }

export default function App() {
  const route = useHashRoute()
  const Page = pages[route]

  return (
    <>
      <svg className="grain" aria-hidden="true" focusable="false">
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
      <Page />
      <Footer />
    </>
  )
}
