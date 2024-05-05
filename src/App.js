import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import Tuitors from './Components/Tuitors/Tuitors'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
        <Navbar />
        <Hero />
        <div className='container'>
          <About setPlayState={setPlayState}/>
          <Title subTitle="Our Programs" title="What We Offer"/>          
          <Programs />
          <Title subTitle="Classes" title="Check Our Subjects"/>
          <Courses />          
          <Title subTitle="Tuitors" title="Our Tuitor's Bios"/>
          <Tuitors />
          <Title subTitle="Contact Us" title="Get Started"/>
          <Contact />
          <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App