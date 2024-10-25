import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ServicesCards.css'

function ServicesCardz({ heading, content, images, isActive, onMouseEnter }) {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX } = e;
            const image = imageRef.current;
            const card = image?.parentElement;

            if (image && card) {
                const cardRect = card.getBoundingClientRect();
                const xPosition = clientX - cardRect.left - image.clientWidth / 2;
                image.style.transform = `translateX(${xPosition}px)`;
            }
        };

        const card = imageRef.current?.parentElement;
        if (card) {
            card.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (card) {
                card.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div
            className='py-5 position-relative services-card'
            style={{ borderBottom: '1px solid #fff' }}
        >
            <h1 className='text-white'>{heading}</h1>
            <p style={{ color: '#666' }}>{content}</p>
            <img
                ref={imageRef}
                src={images}
                className='position-absolute service-image'
                style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                    width: '120px',
                    height: '120px',
                    transition: 'transform 0.1s ease, opacity 0.3s ease',
                    top: '25%',
                    opacity: 0,
                    zIndex: '-1',
                    left: '0',
                }}
                alt=""
            />
        </div>
    );
}

export default ServicesCardz;
