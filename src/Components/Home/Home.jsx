import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';
import hand from '../../assets/hand.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: 'About Ambitious Trainings',
    description: 'Ambitious Trainings is a premier educational institution dedicated to fostering intellectual growth and professional development in students from diverse backgrounds.',
  },
  {
    title: 'Our Mission',
    description: 'Our mission is to cultivate an inclusive and supportive community where students can excel academically, professionally, and personally.',
  },
  {
    title: 'What Sets Us Apart',
    description: 'We differentiate ourselves by offering a holistic approach to education that goes beyond traditional classroom learning.',
  },
];

const offers = [
  {
    title: 'Number of Students',
    value: 1000,
  },
  {
    title: 'Courses Offered',
    value: 100,
  },
  {
    title: 'Partnership',
    value: 150,
  },
];

function Home() {
  const linkRef = useRef(null);
  const offerRef = useRef([]);
  const btnRef = useRef([]);

  useEffect(() => {
    const tl = gsap.from(linkRef.current, {
      y: 100,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: linkRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse', // Optional: reverse animation when scrolling back up
      },
    });

    offerRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        duration: 1,
        delay: index * 0.3, // Delay based on index for staggered effect
        opacity: 0,
        scrollTrigger: {
          trigger: card, // Fixed trigger for individual cards
          start: 'top 80%',
          toggleActions: 'play none none reverse', // Optional: reverse animation when scrolling back up
        },
      });
    });

    // Button animation
    btnRef.current.forEach((button, index) => {
      gsap.from(button, {
        y: 50,
        duration: 1,
        delay: index * 0.3,
        opacity: 0,
        scrollTrigger: {
          trigger: '#row',
          start: 'top 90%', // Trigger when the top of the button hits 80% of the viewport height
          toggleActions: 'play none none reverse', // Optional: reverse animation when scrolling back up
        },
      });
    });

    return () => {
      // Cleanup ScrollTrigger instances when the component unmounts
      tl.scrollTrigger.kill();
      offerRef.current.forEach((card) => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === card) {
            trigger.kill();
          }
        });
      });
      btnRef.current.forEach((button) => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === button) {
            trigger.kill();
          }
        });
      });
    };
  }, []);

  // Function to set button references
  const setRef = (el) => {
    if (el && !btnRef.current.includes(el)) {
      btnRef.current.push(el);
    }
  };

  return (
    <>
      <div className="container position-relative" id="home" style={{ paddingTop: '50px', zIndex: '1' }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <motion.img
              src={hand}
              initial={{
                y: 80,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
                duration: 1,
                ease: 'easeInOut',
              }}
              style={{ maxWidth: '100px' }}
              alt=""
            />
            <motion.h1
              className="mb-0 fw-bolder"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
              style={{ lineHeight: '3.5rem', color: '#f4a610' }}
            >
              Ambitious Trainings
            </motion.h1>
            <motion.span
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
              className="text-white fw-normal fs-1 mb-4 d-inline-block"
            >
              We Build Future
            </motion.span>
            <div className="row text-center mb-5">
              {data.map((data, index) => (
                <div className="col-md-4" key={index}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: index }}
                    className="px-4 py-5 h-100"
                    style={{ border: '1px solid #fff' }}
                  >
                    <h3 className="text-white fw-bolder">{data.title}</h3>
                    <p className="mb-2 text-white" style={{ lineHeight: '1.7rem' }}>
                      {data.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
            <Link
              ref={linkRef}
              to="/courses"
              id="btn-primary"
              className="px-5 py-3 fs-5 text-white d-inline-block text-decoration-none fw-bold"
            >
              About Courses
            </Link>
          </div>
        </div>
        <div className="row text-center my-5">
          {offers.map((cards, index) => (
            <div className="col-md-4" key={index}>
              <div ref={(el) => (offerRef.current[index] = el)} id="card" className="py-4">
                <h3 className="fw-semibold text-white">{cards.title}:</h3>
                <h3 className="fw-bolder text-white">{cards.value}+</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="row mb-5" id='row'>
          <div className="col-md-6">
            <Link
              ref={setRef}
              to="/admissionForm"
              id="btn"
              className="me-5 px-5 py-3 text-decoration-none text-white d-inline-block"
            >
              <b>Enroll Now</b>
              <i className="fa-solid fa-arrow-right ms-3"></i>
            </Link>
          </div>
          <div className="col-md-6 text-end">
            <Link
              ref={setRef}
              to="/about"
              id="btn"
              className="px-5 py-3 text-decoration-none text-white d-inline-block"
            >
              More Information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
