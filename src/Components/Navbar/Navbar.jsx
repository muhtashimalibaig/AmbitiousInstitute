import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CreateAccount from '../CreateAccountPop/CreateAccount';
import {motion} from 'framer-motion';
import hand from '../../assets/hand.png'
function Navbar() {
// toggle functionality
  const [userBtn, setUserBtn] = useState(false);
  const handleBtn = () => {
    setUserBtn(!userBtn)    
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({      
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger effect by delaying each item
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };

  const navLinks = [
    { path: '/Home', label: 'Home' },
    { path: '/About', label: 'About Us' },
    { path: '/Courses', label: 'Course Offerings' },
    { path: '/Services', label: 'Services' },
    { path: '/admissionForm', label: 'Admissions' },
    { path: '/blog', label: 'Blog' },
    { path: '#', label: 'Events' },
    { path: '/faq', label: 'Faq' },
    { path: '/contact', label: 'Contact Us', className: 'text-decoration-none text-white mx-2', id: 'btn-primary' },
  ];

  // jsx
  return (
    <>
<nav className="navbar navbar-expand-lg px-5 py-3" style={{
    borderBottom: '1px solid #bababa'
}}>
  <div className="container-fluid">
    <motion.a className="navbar-brand text-white"
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
    transition={{duration: 1, ease: 'easeInOut'}}
     href="#">
      <img src={logo} alt="" style={{maxWidth: '250px'}} />
     </motion.a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
  {navLinks.map((link, index) => (    
    <motion.li
      className={`nav-item ${link.className || ''}`}
      key={link.path}
      custom={index * 1.2}
      initial="hidden"
      animate="visible"
      variants={navItemVariants}
      id={link.label === 'Contact Us' ? 'btn-primary' : undefined} // Add `id` conditionally
    >
      <Link className="nav-link fw-bold text-white mx-2" to={link.path}>
        {link.label}
      </Link>
    </motion.li>
  ))}
  <motion.li
    className="nav-item"
    custom={navLinks.length}
    initial="hidden"
    animate="visible"
    variants={navItemVariants}
  >
    <div className="nav-link fw-bold mx-2 user" onClick={handleBtn} style={{ cursor: 'pointer' }}>
      <i className="fa-solid fa-user"></i>
    </div>
  </motion.li>
</ul>


    </div>
  </div>
</nav>
{userBtn === true ? <CreateAccount handleClose={handleBtn} /> : ''}
    </>
  )
}

export default Navbar
