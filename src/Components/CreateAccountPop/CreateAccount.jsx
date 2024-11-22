import React, { useState } from 'react'
import './CreateAccount.css'
import { Link } from 'react-router-dom';
function CreateAccount({handleClose}) {
  return (
    <>
    <div className='position-fixed px-5 py-5' id='create--account' style={{left: '35%', zIndex: '9', border: '1px solid #000', boxShadow: '0px 0px 30px 0px #000'}}>
        <div className='text-end position-absolute' style={{top: '3%', left: '86%'}}>
            <div style={{cursor: 'pointer'}} onClick={handleClose}>
            <i className="fa-solid fa-xmark fs-1 text-black"></i>
            </div>
        </div>
      <h1 className='text-center text-white'>New Here!</h1>
      <h2 className='text-center text-white'>Sign Up Here for More <br /> Information</h2>
      <form action="">
        <label htmlFor="Username" className='fw-bold text-white'>Username:</label><br />
        <input type="text" id='Username' className='w-100' placeholder='Enter Your Name' />
        <label htmlFor="Username" className='fw-bold text-white mt-3'>Email:</label><br />
        <input type="email" id='Username' className='w-100' placeholder='Enter Your Email' />
        <div className='text-center'>
        <button id='contact-btn' type='button' value='Submit' className='mt-3 px-3'>Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default CreateAccount
