import React, { useEffect, useRef, useState } from 'react';
import './Loader.css';
import { gsap } from 'gsap';

function Loader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(textRef.current, {
        opacity: 0,
        duration: 1.3,
        y: 50,
      })
      .from(textRef2.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      }, "+=0.3");

    setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setLoading(false),
      });
    }, 4000);
  }, []);

  if (!loading) return null;

  return (
    <>
      <div ref={loaderRef} className='bg-black position-fixed w-100' style={{ height: '100vh', top: 0, zIndex: '1000' }}>
        <div className='position-absolute text-center' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 className='text-white overflow-hidden' ref={textRef} id='text-animation'>
            Ambitious Trainings
          </h1>
          <h2 className='text-white' ref={textRef2} id='text'>
            We Build Future
          </h2>
        </div>
      </div>
    </>
  );
}

export default Loader;
