import React from 'react'
import './Courses.css'
import course_1 from '../../assets/sciences.jpg'
import course_2 from '../../assets/languages.jpg'
import course_3 from '../../assets/humanities.jpg'
import course_4 from '../../assets/coding.jpeg'
import white_arrow from '../../assets/white-arrow.png'

const Courses = () => {
  return (
    <div className='courses'>
        <div className='course'>
          <div className='class'>
            <h2>Sciences</h2>
            <img src={course_1} alt='' />
            <span>
              <ul>
                <li>Mathematics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Physics</li>
              </ul>
            </span>
          </div>
          <div className='class'>
            <h2>Languages</h2>
            <img src={course_2} alt='' />
            <span>
              <ul>
                <li>English</li>
                <li>French</li>
                <li>Germany</li>
                <li>Swahili</li>
                <li>Kenyan Sign Language</li>
              </ul>
            </span>
          </div>
          <div className='class'>
            <h2>Humanities</h2>
            <img src={course_3} alt='' />
            <span>
              <ul>
                <li>History</li>
                <li>Agriculture</li>
                <li>Business/Economics</li>
                <li>Geography</li>
              </ul>
            </span>
          </div>
          <div className='class'>
            <h2>Coding</h2>
            <img src={course_4} alt='' />
            <span>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </span>
          </div>
            
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt='' /></button>
    </div>
  )
}

export default Courses