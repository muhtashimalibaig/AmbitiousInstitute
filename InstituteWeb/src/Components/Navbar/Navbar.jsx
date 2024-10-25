import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CreateAccount from '../CreateAccountPop/CreateAccount';
function Navbar() {
  const [userBtn, setUserBtn] = useState(false);
  const handleBtn = () => {
    setUserBtn(!userBtn)    
  }
  return (
    <>
<nav className="navbar navbar-expand-lg px-5 py-3" style={{
    borderBottom: '1px solid #bababa'
}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><img src={logo} alt="" style={{maxWidth: '250px'}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/Home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/About'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/Courses'>Course Offerings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/Services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/admissionForm'>Admissions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/blog'>Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='#'>Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white mx-2" to='/faq'>Faq</Link>
        </li>
        <li className="nav-item overflow-hidden align-content-center">
          <Link className="text-decoration-none text-white mx-2 px-3 py-2" to='/contact' id='contact-btn'>Contact Us</Link>
        </li>
        <li>
        <div className="nav-link fw-bold mx-2 user" onClick={handleBtn} style={{ cursor: 'pointer' }}>
                  <i className="fa-solid fa-user"></i>
                </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{userBtn === true ? <CreateAccount handleClose={handleBtn} /> : ''}
    </>
  )
}

export default Navbar
