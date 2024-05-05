import React from 'react'
import './About.css'
import about_img from '../../assets/jabuya.JPG'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT CRIDON PINNACLE</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Cridon Pinnacle Tuition Network (CPTN) believes in making high-quality education accessible to learners of 
                all backgrounds. We believe that quality education is the foundation to a successful society. 
                The tuition network was founded in 2020, at a time when the Covid-19 was ravaging the world.                
            </p>
            <p>
                CPTN, amidst the challenges posed by the pandemic, emerged as a fortress of hope for the learners 
                who direly sought effective learning solutions in the ever-changing educational landscape. 
                We have an unwavering commitment to excellence, and for this, we are trusted by many in the education industry. 
            </p>
            <p>
                Embark on a transfomative educational journey with our Cridon Pinnacle 
                comprehensive tuition programs. Our cutting-edge curriculum is designed
                to offer student-centred experience to empower students with the necessary
                knowledge, skills, and experiences needed to excel in the dynamic field of education.
            </p>
            <p>
                With focus on innovation, hands-on learning, and personalized mentorship,
                our programs prepar aspiring educators to make a meaningful impact in 
                classrooms, schools, and job industry.
            </p>
    
        </div>
    </div>
  )
}

export default About