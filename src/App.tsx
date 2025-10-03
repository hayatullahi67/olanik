import Header from './components/Header'
import Hero from './components/Hero'
import LogosCarousel from './components/LogosCarousel'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Header />
      <Hero />
      <LogosCarousel />
      <Services />
      <Works />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
