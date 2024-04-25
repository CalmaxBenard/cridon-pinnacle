import React from 'react'
import './Courses.css'
import course_1 from '../../assets/gallery-1.png'
import course_2 from '../../assets/gallery-2.png'
import course_3 from '../../assets/gallery-3.png'
import course_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Courses = () => {
  return (
    <div className='courses'>
        <div className='course'>
            <img src={course_1} alt='' />
            <img src={course_2} alt='' />
            <img src={course_3} alt='' />
            <img src={course_4} alt='' />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt='' /></button>
    </div>
  )
}

export default Courses