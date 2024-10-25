import React from 'react'
import { Link } from 'react-router-dom'
function AdmissionForm() {
  return (
    <>
    <div className='container mt-5'>
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center text-center">
                <div className='p-5 border border-black' style={{boxShadow: '0px 10px 20px 1px #000'}}>
                    <h3 className='fw-bolder text-white'>Ambitious Trainings <br /> Registrations</h3>
                    <h1 className='text-white fw-bolder my-3'>FORM</h1>
                    <p className='text-white fw-semibold pb-3' style={{borderBottom: '1px solid #fff'}}>It is the registration form of Ambitious Trainings. You can select your desired course. <br />
                    Kindly Enter all the required information. You will be Informed the starting date and timings <br /> of the course via SMS/ CALL</p>
                    <div className='d-flex' style={{gap: '20px'}}>
                    <p className='text-white fw-bold'>muhtashimalibaig@gmail.com</p>
                    <a href="#" className='text-decoration-none' style={{color: '#f4a916'}}>Switch Accounts</a>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Link to="/form" className='px-4 py-2 bg-white text-decoration-none text-black fw-bold'>Next</Link>
                        <a href="#" className='px-4 py-2 bg-black text-decoration-none text-white fw-bold' style={{border: '1px solid #fff'}}>Clear Form</a>
                    </div>
                </div>
                <span id='shadow' style={{
                    width: '250px',
                    height: '150px',
                    backgroundImage: 'linear-gradient(rgba(173, 216, 230, 0.851), rgba(203, 203, 255, 0.062))',
                    position: 'absolute',
                    filter: 'blur(60px)',
                    top: '40%',
                    zIndex: '-1'
                }}></span>
                <div>
                </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default AdmissionForm
