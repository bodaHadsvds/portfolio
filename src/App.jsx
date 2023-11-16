import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills  from './components/skills'
import Skillscard from './components/skillscard'
import About from './components/about'
import Projects from './components/projects'
const App = () => {
  return (
    <div>
 <Navbar/>
 <Hero/>
 <Skills/>
 <Skillscard/>
 <About/>
 <Projects/>
  </div>
  )
}

export default App