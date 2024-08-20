import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Support from './Components/Supported By/Support'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Vision from './Components/Vision/Vision'
import Projects from './Components/Projects/Projects'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title title='Supported By:'/>
      <Support/>
      <About/>
      <Vision/>
      <Title title='Our Projects'/>
      <Projects/>
      <Title title='Our Team'/>
      <Team/>
      <Title title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
