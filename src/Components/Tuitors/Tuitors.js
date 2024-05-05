import React, { useRef } from 'react'
import './Tuitors.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import tuitor_1 from '../../assets/jabuya.JPG'
import tuitor_2 from '../../assets/calmax.JPG'
import tuitor_3 from '../../assets/chem.jpg'
import tuitor_4 from '../../assets/user-4.png'

const Tuitors = () => {
    const slider = useRef();
    let tx = 0
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='tuitors'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={tuitor_1} alt='' />
                            <div>
                                <h3>Mr Moses Jabuya</h3>
                                <span>Biology Teacher</span>
                            </div>
                        </div>
                        <p>
                            Passionate biology teacher with 10+ years experience. 
                            Dedicated to fostering curiosity and critical thinking. 
                            Integrates hands-on experiments and technology for engaging learning experiences. 
                            Mentor and advocate for STEM education.                            
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={tuitor_2} alt='' />
                            <div>
                                <h3>Eng. Carlmax Benard</h3>
                                <span>Python Developer/Mechanical Engineer</span>
                            </div>
                        </div>
                        <p>
                        Experienced Python developer with a knack for problem-solving and clean coding. 
                        Proficient in web development and automation. 
                        Enthusiastic about new technologies and collaborative projects. 
                        Dedicated to continuous learning and improvement.                          
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={tuitor_3} alt='' />
                            <div>
                                <h3>Ms. Linda Otieno</h3>
                                <span>Chemistry Teacher</span>
                            </div>
                        </div>
                        <p>
                        Dedicated chemistry teacher with a passion for inspiring students' love for science. 
                        Expertise in lab experiments and theoretical concepts. 
                        Committed to fostering critical thinking and scientific inquiry in students.                            
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={tuitor_4} alt='' />
                            <div>
                                <h3>Mr. Jackson Mbithi</h3>
                                <span>Physics Teacher</span>
                            </div>
                        </div>
                        <p>
                        Passionate physics educator adept at simplifying complex concepts. 
                        Skilled in hands-on demonstrations and fostering analytical thinking. 
                        Dedicated to cultivating curiosity and enthusiasm for the wonders of the physical world.                            
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <button className='btn dark-btn'>See all here</button>
    </div>
  )
}

export default Tuitors