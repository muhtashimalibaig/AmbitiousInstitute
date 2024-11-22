import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Form() {
  const [gender, setGender] = useState(null);

  const handleGender = (event) => {
    const value = event.target.value;
    setGender((prevGender) => (prevGender === value ? null : value));
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="p-5 border border-black" style={{boxShadow: '0px 10px 30px 0px #000'}}>
              <div>
                <h1
                  className="text-center text-white pb-3"
                  style={{ borderBottom: '1px solid #fff' }}
                >
                  Ambitious Trainings Registrations
                </h1>
                <div className="d-flex my-4" style={{ gap: '20px' }}>
                  <p className="text-white fw-bold">
                    muhtashimalibaig@gmail.com
                  </p>
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: '#f4a916' }}
                  >
                    Switch Accounts
                  </a>
                </div>
              </div>
              <div
                className="row py-2"
                style={{ background: 'rgb(63, 81, 181)' }}
              >
                <div className="col-md-12">
                  <h4 className="mb-0 text-white">Untitled Section</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 py-3">
                  <h5 className='text-white'>
                    Applicant's Name <span className="text-danger">*</span>
                  </h5>
                  <input
                    type="text"
                    placeholder='Enter Applicant Name'
                    name=""
                    id=""
                    className="bg-transparent w-100 text-white"
                    style={{ borderBottom: '1px solid #fff' }}
                  />
                </div>
                <div className="col-md-6 py-3">
                  <h5 className='text-white'>
                    Applicant's Father Name <span className="text-danger">*</span>
                  </h5>
                  <input
                    type="text"
                    placeholder='Enter Your Father Name'
                    className="bg-transparent w-100 text-white"
                    style={{ borderBottom: '1px solid #fff' }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 py-3">
                  <h5 className='text-white'>
                    Gender <span className="text-danger">*</span>
                  </h5>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === 'male'}
                      onChange={handleGender}
                    />
                    <span className='text-white' style={{ cursor: 'pointer', marginLeft: '5px' }}>
                      Male
                    </span>
                  </label> <br />
                  <label style={{ marginLeft: '0px' }}>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === 'female'}
                      onChange={handleGender}
                    />
                    <span className='text-white' style={{ cursor: 'pointer', marginLeft: '5px' }}>
                      Female
                    </span>
                  </label>
                </div>
                <div className="col-md-6">
                    <h5 className='text-white'>Contact No <span className='text-danger'>*</span></h5>
                    <input
                    type="text"
                    placeholder='Enter Your Contact Number'
                    name=""
                    id=""
                    className="bg-transparent w-100 text-white"
                    style={{ borderBottom: '1px solid #fff' }}
                  />
                </div>
              </div>
              <div className="row mb-4">
              <div className="col-md-6">
            <h5 className='text-white'>Date of Birth <span className='text-danger'>*</span></h5>
            <label for="dob" className='text-white'>Select Date</label> <br />
            <input type="date" name="dob" id="dob" className='bg-white text-black' />
            </div>
                <div className="col-md-6">
                    <h5 className='text-white'>Student's bayForm/ CNIC Number <span className='text-danger'>*</span></h5>
                    <input type="text" placeholder='Enter Student BayForm / CNIC Number' name="" id="" className='w-100 bg-transparent text-white' style={{borderBottom: '1px solid #fff'}} />
                </div>
              </div>
              <div className="row py-4">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h5 className='text-white'>Select The Courses (You can Select more than 1 course) <span className='text-danger'>*</span></h5>
                    </div>
                </div>
                <div className="col-md-6">
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Computer Expertise (1 month Approx.)</span> <br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Pro Video Editing (2 month)</span><br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>2D Game Designing (2 month)</span><br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Web Development (3 month)</span><br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Amazon (2 month)</span>
                </div>
                <div className="col-md-6">
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Graphics Designing (2 month Approx.)</span> <br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>UI/Ux Designing (2 month)</span><br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Android App Designing (2 month)</span><br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Android Development (3 month)</span><br />
                    <input className='my-2' type="checkbox"/> <span className='fw-bold text-white'>Digital Marketing(2 month)</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                    <h5 className='text-white'>What Do you do? <span className='text-danger'>*</span></h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="radio" /><span className='ms-2 text-white'>Study</span><br />
                        <input type="radio" /><span className='ms-2 text-white'>Job</span><br />
                        <input type="radio" /><span className='ms-2 text-white'>Buisness</span><br />
                        <input type="radio" /><span className='ms-2 text-white'>Others</span><br />
                    </div>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-md-12">
                    <h5 className='mt-4 mb-0 text-white'>City <span className='text-danger'>*</span></h5>
                    <input type="text" placeholder='Enter Your City' className='w-25 bg-transparent text-white' style={{borderBottom: '1px solid #fff'}} id="" />
                </div>
              </div>
              <div className="row mt-4">
                <div className='col-md-6'>
                    <Link to="/admissionForm" id='btn' className='px-5 text-white text-decoration-none py-2'>Back</Link>
                </div>
                <div className='col-md-6 text-end'>
                    <a href="#" id='btn' className='px-5 py-2 text-white text-decoration-none'>Submit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
