import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt='first program' />
            <div className='caption'>
                <img src={program_icon_1} alt='' />
                <p>Junior High School</p>                
            </div>
            <span className='content'>
                <ul>
                    <li>Sciences</li>
                    <li>Languages</li>
                    <li>Humanities</li>
                </ul>
            </span>
        </div>
        <div className='program'>
            <img src={program_2} alt='second program' />
            <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Senior High School</p>
            </div>
            <span className='content'>
                <ul>
                    <li>Sciences</li>
                    <li>Languages</li>
                    <li>Humanities</li>
                </ul>
            </span>
        </div>
        <div className='program'>
            <img src={program_3} alt='third program' />
            <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>College | University</p>
            </div>
            <span className='content'>
                <ul>
                    <li>Mathematics</li>
                    <li>Programming</li>
                    <li>Personalized Tutorials</li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export default Programs