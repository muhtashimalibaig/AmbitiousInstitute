// CourseDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CoursesDetails() {
  const location = useLocation();
  
  const { image, title, description, duration, prerequisites } = location.state;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt={title} className="img-fluid w-100 h-100" />
        </div>
        <div className="col-md-6 p-4 align-content-center">
          <h2 className='text-white fw-bolder mb-4'>{title}</h2>
          <p className='text-white'>{description}</p>
          <p className='text-white'><strong>Duration:</strong> {duration}</p>
          <p className='text-white'><strong>Prerequisites:</strong> {prerequisites}</p>
          <Link to='/courses' id='btn-primary' className='d-inline-block px-5 py-2 text-decoration-none text-white fw-semibold'>Back</Link>
          <Link to='/admissionForm' id='btn-primary' className='ms-4 d-inline-block px-5 py-2 text-decoration-none bg-black text-white fw-semibold'>Register Now</Link>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetails;
