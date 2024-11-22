import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ServicesCards.css'

function ServicesCardz({ heading, content, images, isActive, onMouseEnter }) {

    return (
        <div
            className='p-5 position-relative services-card h-100'
            style={{ border: '1px solid #fff' }}
        >
            <h1 className='text-white' style={{fontStyle: 'italic'}}>{heading}</h1>
            <p style={{ color: '#d4d2d2' }}>{content}</p>
        </div>
    );
}

export default ServicesCardz;
