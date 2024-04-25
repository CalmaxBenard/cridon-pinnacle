import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better Education for Real World Problems</h1>
            <p>Our cutting-edge curriculum and student-centered learning environment
                is designed to empower students with knowledge, skills, and experience
                needed to excel in the dynamic field of education
            </p>
            <button className='btn'>Explore more <img src={arrow} alt='explore more arrow' /></button>
        </div>
    </div>
  )
}

export default Hero