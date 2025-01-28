import React from 'react'
import Navabr from './sections/Navabr'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
       <Navabr />
       <Hero />
       <About/>
       <Projects />
    </main>
  )
}
