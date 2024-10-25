import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Contact.css'
import { Link } from 'react-router-dom';
import contactImage from '../../assets/contact.jfif'
function Contact() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
            <div className="col-md-12 text-center">
                <h1 style={{color: '#f4a910'}}>Contact <span className='text-white'>Us</span></h1>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-md-6" >
                <h2 className='text-white'>Contact Information</h2>
                <div>
                <div className='d-flex text-white align-items-center my-3' style={{gap: '10px'}}>
                    <i className="fa-solid fa-phone"></i>
                    <h5 className='mb-0'>+1234 - 567890</h5>
                    </div>
                <div className='d-flex text-white align-items-center my-3' style={{gap: '10px'}}>
                <i className="fa-regular fa-paper-plane"></i>
                    <h5 className='mb-0'>Test@test.com</h5>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-2">
                        <div>
                            <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-instagram fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-facebook-messenger fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div>
                        <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-linkedin-in fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                    </div>
                    </div>
                    <div className="col-md-2">
                    <div>
                        <a href="#" className='icons d-inline-block text-white position-relative' style={{border: '1px solid #fff',borderRadius: '50%',width: '50px', height: '50px'}}><i className="fa-brands fa-twitter fs-4 position-absolute" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></i></a>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <Link target='_blank' to='/admissionForm' className='px-4 py-3 text-decoration-none text-white fw-bold' id='btn'>Admission Form</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <form style={{boxShadow: '0px 10px 30px 0px #000'}} className='p-4'>
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
                            <a href="#" id='btn-primary' className='overflow-hidden d-inline-block px-5 py-2 bg-black text-white text-decoration-none'>Submit</a>
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
