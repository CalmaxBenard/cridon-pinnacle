import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}><div className='logo'>
        <img src={logo} alt='school logo' />
        <p>Cridon Pinnacle</p>
      </div></Link>
        <ul className={mobileMenu ? '' : 'hide-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to="courses" smooth={true} offset={-230} duration={500}>Courses</Link></li>
            <li><Link to="tuitors" smooth={true} offset={-230} duration={500}>Tutors</Link></li>
            <li><Link to="programs" smooth={true} offset={-230} duration={500}>Enrollment</Link></li>
            <li><Link to="programs" smooth={true} offset={-230} duration={500}>Blog</Link></li>
            <li><Link to="contact" smooth={true} offset={-200} duration={500} className='btn'>Contact</Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar