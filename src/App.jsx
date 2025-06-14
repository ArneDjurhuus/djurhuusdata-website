import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
