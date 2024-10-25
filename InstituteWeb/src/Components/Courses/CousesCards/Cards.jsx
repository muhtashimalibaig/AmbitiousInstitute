import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ image, title, description, duration, prerequisites }) {
  return (
    <div className="card bg-transparent h-100" style={{ border: '1px solid #fff' }}>
      <img src={image} className="card-img-top" alt={title} style={{ maxHeight: '250px', objectFit: 'cover' }} />
      <div className="card-body" style={{ borderTop: '1px solid #fff' }}>
        <h5 className="card-title text-white fw-bolder">{title}</h5>
        <p className="card-text text-white">{description}</p>
        <p className="fw-bolder text-white">{duration}</p>
        <p className="text-white">{prerequisites}</p>
        <Link
          to={{
            pathname: `/course-details/${title.toLowerCase().replace(/\s+/g, '-')}`,
          }}
          state={{ image, title, description, duration, prerequisites }}
          className="px-4 py-2 bg-black text-decoration-none fw-bold text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Cards;
