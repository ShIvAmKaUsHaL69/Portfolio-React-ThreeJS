import React from 'react'
import Navabr from './sections/Navabr'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
       <Navabr />
       <Hero />
       <About/>
       <Projects />
       <Experience/>
       <Contact/>
       <Footer />
    </main>
  )
}
