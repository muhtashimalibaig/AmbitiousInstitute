import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css'
import hand from '../../assets/hand.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="container position-relative" id='home' style={{paddingTop: '50px'}}>
        <div className="row">
            <div className="col-md-12 text-center">
                <img src={hand} style={{maxWidth: '100px'}} alt="" />
                {/* <h1 className='text-white mb-4' style={{lineHeight: '2.5rem'}}>Insititute Overview, Mission Statement, Whats Sets Us Apart :</h1> */}
                <h1 className='mb-4 fw-bolder' style={{lineHeight: '3.5rem', color: '#f4a610'}}>Ambitious Trainings <br /> <span className='text-white fw-normal'>We Build Future</span></h1>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className='px-3 py-5' style={{border: '1px solid #fff'}}>
                    <h3 className='text-white fw-bolder'>About Ambitious Trainings</h3>
                <p className='mb-2' style={{color: '#fff', lineHeight: '1.7rem'}}>Ambitious Trainings is a premier educational institution dedicated to fostering intellectual growth and professional development in students from diverse backgrounds. </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className='px-3 py-5 border border-white h-100'>
                    <h3 className='text-white fw-bolder'>Our Mission</h3>
                <p className='mb-2' style={{color: '#fff', lineHeight: '1.7rem'}}>Our mission is to cultivate an inclusive and supportive community where students can excel academically, professionally, and personally.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className='h-100 px-3 py-5 border border-white'>
                    <h3 className='text-white fw-bolder'>Whats Sets Us Apart</h3>
                <p className='mb-4' style={{color: '#fff', lineHeight: '1.7rem'}}>we differentiate ourselves by offering a holistic approach to education that goes beyond traditional classroom learning. </p>
                    </div>
                  </div>
                </div>
                <Link to='/courses' id='btn-primary' className='px-5 py-3 fs-5 text-white d-inline-block text-decoration-none fw-bold'>About Courses</Link>
            </div>
        </div>
        <div className="row text-center my-5">
            <div className="col-md-4">
                <div id='card' className='py-4'>
                <h3 className='fw-semibold text-white'>Number Of Students:</h3>
                <h1 className='fw-bolder text-white'>100+</h1>
                </div>
            </div>
            <div className="col-md-4">
                <div id='card' className='py-4'>
                <h3 className='fw-semibold text-white'>courses offered:</h3>
                <h1 className='fw-bolder text-white'>1000+</h1>
                </div>
            </div>
            <div className="col-md-4">
                <div id="card" className="py-4">
                <h3 className='fw-semibold text-white'>Partnerships:</h3>
                <h1 className='fw-bolder text-white'>150+</h1>
                </div>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-md-6">
                <div className='overflow-hidden d-inline-block'>
                <Link to='/admissionForm' id='btn' className='me-5 px-5 py-3 text-decoration-none text-white'><b>Enroll Now</b><i className="fa-solid fa-arrow-right ms-3"></i></Link>
                </div>
                </div>
                <div className="col-md-6 text-end">
                <Link to='/about' id='btn2' className='px-5 py-3 text-decoration-none text-white d-inline-block'>More Information</Link>
                </div>
                <div>
            </div>
        </div>
      </div>
      <div id='shade'></div>
      <div id='shade2'></div>
    </>
  )
}

export default Home