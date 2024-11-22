import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ image, title, description, duration, prerequisites }) {
  return (
    <div className="card h-100" style={{ background: 'rgb(1, 33, 52)', boxShadow: '15px 10px 30px 0px #000' }}>
      <img src={image} className="card-img-top" alt={title} style={{ maxHeight: '250px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-white fw-bolder">{title}</h5>
        <p className="card-text text-white">{description}</p>
        <p className="fw-bolder text-white">{duration}</p>
        <p className="text-white">{prerequisites}</p>
        <Link
        id='btn-primary'
          to={{
            pathname: `/course-details/${title.toLowerCase().replace(/\s+/g, '-')}`,
          }}
          state={{ image, title, description, duration, prerequisites }}
          className="px-4 py-2 text-decoration-none fw-bold text-white overflow-hidden d-inline-block"
          style={{
            background: '#012134'
          }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Cards;
