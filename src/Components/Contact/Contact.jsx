import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Contact.css'
import { Link } from 'react-router-dom';
// import contactImage from '../../assets/contact.jfif'
import {gsap} from 'gsap';

function Contact() {
    const contactRef = useRef(null);
    const informationRef = useRef(null);
    const numberRef = useRef(null);
    const emailRef = useRef(null);
    const iconsRef = useRef(null);
    const buttonRef = useRef(null);
    const formRef = useRef(null);
    useEffect(() => {
        gsap.from(contactRef.current, {
            y: 50,
            opacity: 0,
            duration: 1
        });
        gsap.from(informationRef.current,{
            y: 50,
            opacity: 0,
            duration: 1
        });
        gsap.from(numberRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: .5
        });
        gsap.from(emailRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 1
        });
        gsap.from(iconsRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 1.4
        });
        gsap.from(buttonRef.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            delay: 1.8,
        });
        gsap.from(formRef.current, {
            x: 100,
            duration: 1,
            opacity: 0,
            delay: 1
        })
    }, [])
  return (
    <>
      <div className="container">
        <div className="row my-5">
            <div className="col-md-12 text-center">
                <h1 style={{color: '#f4a910'}} ref={contactRef}>Contact Us</h1>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-md-6" >
                <h2 className='text-white' ref={informationRef}>Contact Information:</h2>
                <div>
                <div className='d-flex text-white align-items-center my-3' ref={numberRef} style={{gap: '10px'}}>
                    <i className="fa-solid fa-phone"></i>
                    <h5 className='mb-0'>+1234 - 567890</h5>
                    </div>
                <div className='d-flex text-white align-items-center my-3' style={{gap: '10px'}} ref={emailRef}>
                <i className="fa-regular fa-paper-plane"></i>
                    <h5 className='mb-0'>Test@test.com</h5>
                    </div>
                </div>
                <div className="row mb-4" ref={iconsRef}>
                    <div className="col-md-1">
                        <div>
                            <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-instagram fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div>
                            <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-facebook-messenger fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                        </div>
                    </div>
                    <div className="col-md-1">
                    <div>
                        <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-linkedin-in fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                    </div>
                    </div>
                    <div className="col-md-1">
                    <div>
                        <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-twitter fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div ref={buttonRef}>
                            <Link target='_blank' to='/admissionForm' className='px-4 py-3 text-decoration-none text-white fw-bold' id='btn'>Admission Form</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <form style={{background: '#012134', borderRadius: '20px'}} className='p-4' ref={formRef}>
                    <h3 className='text-white'>Send Us Message For More Information</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className='text-white mt-3'>FirstName:</label><br />
                            <input type="text" id="firstName" placeholder='Enter Your First Name' className='w-100 bg-transparent text-white' style={{borderBottom: '1px solid #fff'}} />
                            <label htmlFor="Email" className='text-white mt-3'>Email:</label><br />
                            <input type="email" id="Email" placeholder='Enter Your Email' className='w-100 bg-transparent text-white' style={{borderBottom: '1px solid #fff'}} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className='text-white mt-3'>LastName:</label><br />
                            <input type="text" id="firstName" placeholder='Enter Your Last Name' className='w-100 bg-transparent text-white' style={{borderBottom: '1px solid #fff'}} />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <label htmlFor="message" className='text-white mb-3'>Send a Message:</label>
                            <textarea className='w-100 bg-transparent border border-white px-2 py-2 text-white fw-normal' placeholder='Type A Message....' rows={10} id=""></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <a href="#" id='btn-primary' className='overflow-hidden d-inline-block px-5 py-2 text-white text-decoration-none'>Submit</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
