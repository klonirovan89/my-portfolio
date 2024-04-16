import React from 'react'
import { Header } from './layout/header'
import { Main } from './layout/sections/main'
import { Skills } from './layout/sections/skills'
import { Works } from './layout/sections/works'
import { Testimony } from './layout/sections/testimony'
import { Contact } from './layout/sections/contacts'
import { Footer } from './layout/footer'
import { Particle } from './components/particle'
import { GoTopBtn } from './components/goTopBtn'
import { Slogan } from './layout/sections/slogan/Slogan'

function App() {
  return (
    <div>
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Slogan />
      <Contact />
      <Footer />
      <GoTopBtn />
    </div>
  )
}

export default App
