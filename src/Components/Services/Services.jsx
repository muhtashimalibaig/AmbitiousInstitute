import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ServicesCardz from './ServicesCards/ServicesCardz';
import Careers from '../../assets/Careers.jfif';
// import Path from '../../assets/Path.jfif';
// import Skills from '../../assets/Skills.jfif';
// import placement from '../../assets/placement.jfif';
import Seminar from '../../assets/Seminar.jfif';
import './Services.css';
import Items from './SeminarItems/Items';
import Students from './Students/Students';
import {gsap} from 'gsap'
import { useRef } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const studentSupport = [
    {
        heading: 'Tutoring Services',
        text: 'Subject-Specific Tutoring: Get assistance in subjects such as mathematics, science, humanities, and more. Our tutors are experts in their fields and use effective teaching strategies to help you understand complex concepts.'
    },
    {
        heading: ' Mentoring Programs',
        text: 'Academic Advising: Receive advice on course selection, academic planning, and goal setting. Mentors help you navigate your academic path and make informed decisions about your studies.'
    },
    {
        heading: 'Counseling and Wellness Services',
        text: 'Counseling Sessions: Speak with licensed counselors about any personal or academic challenges you may be facing. Our confidential counseling services are designed to support your mental health and well-being.'
    },
    {
        heading: 'Academic Resources',
        text: 'Resource Centers: Access a variety of academic materials, including textbooks, study guides, and online resources. Our resource centers are equipped with the tools you need for effective study and research.'
    },
]
const listItems = [
{
  heading: 'Workshops:',
  text: 'Participate in our hands-on workshops, where you can deepen your skills and gain practical experience in specific areas. These sessions are crafted to foster collaboration and active learning, ensuring that you walk away with actionable knowledge.',
},
{
  heading: 'Webinars:',
  text: 'Join our online webinars, accessible from anywhere, where you can learn from experts on a range of topics. These sessions are perfect for staying up-to-date with industry trends, gaining new perspectives, and engaging in discussions with professionals from around the world.',
},
{
  heading: 'Guest Lectures:',
  text: 'Listen to industry leaders and subject matter experts as they share their knowledge and experiences through our guest lecture series. These lectures provide unique insights and inspiration, offering attendees a chance to learn from the best in the field.',
}
];

const content = [
{
  heading: 'Career Counseling: Your Path to Success',
  textContent: 'At Ambitious Trainings, we believe that education is just the beginning of your journey. Our comprehensive Career Counseling services are designed to help you navigate your professional path with confidence and clarity. Here’s how we support you:',
  // images: Careers
},
{
  heading: 'Career Path Guidance',
  textContent: 'Our expert counselors work with you to identify the best career paths based on your interests, strengths, and goals. Whether you’re starting fresh or looking to pivot to a new field, we provide personalized advice to help you make informed decisions about your future.',
  // images: Path
},
{
  heading: 'Skill Assessments',
  textContent: 'Understanding your current skill set is crucial to your career development. We offer detailed skill assessments to identify areas where you excel and areas that may need improvement. This helps you focus your learning efforts and ensures that you’re equipped with the right skills to succeed in your chosen field.',
  // images: Skills
},
{
  heading: 'Job Placement Support',
  textContent: 'Landing your dream job is the ultimate goal, and we’re here to help you achieve it. Our job placement services connect you with top employers in the industry. We assist with resume building, interview preparation, and provide access to exclusive job listings. Our strong network of industry partners ensures that you have the best opportunities available to you.',
  // images: placement
}
];
function Services() {
  const headingRef = useRef(null);
  const servicesRowRef = useRef([]);
  const mainHeadingRef = useRef(null);
  const imageRef = useRef(null);
  const listItemsRef = useRef([]);
  const studentSupportRef = useRef(null)
  const studentCardRef = useRef([])

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: 50,
      duration: 1,
      opacity: 0
    });
    gsap.from(servicesRowRef.current, {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0
    });
    gsap.from(mainHeadingRef.current, {
      scrollTrigger: {
        trigger: '#main-heading-sec',
        start: 'top 60%',
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: '#main-heading-sec',
        start: 'top 60%',
      },
      opacity: 0,
      scale: .1,
      duration: 1,
      delay: .4
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: listItemsRef.current[0],
        start: 'top 60%',
        end: 'bottom top',
        scrub: true,
      }
    });
  
    tl.from(listItemsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
    gsap.from(studentSupportRef.current, {
      scrollTrigger: {
        trigger: studentSupportRef.current,
        start: 'top 60%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
    if (studentCardRef.current.length > 0) {
      gsap.timeline({
        scrollTrigger: {
          trigger: studentCardRef.current[0],
          start: 'top 60%',
        }
      }).from(studentCardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    }
  }, [])
  return (
    <>
      <div id='services' className='container overflow-hidden pb-5' style={{borderBottom: '1px solid #666'}}>
        <div className="row my-5">
          <div className="col-md-12 text-center">
            <h1 className='d-inline-block overflow-hidden' ref={headingRef} style={{ color: 'white', borderBottom: '1px solid orange' }}>
              Services
            </h1>
          </div>
        </div>
        <div className="row position-relative">
          {content.map((items, index) => (
            <div className='col-md-6 mb-5' key={index} ref={(el) => servicesRowRef.current[index] = el}>
              <ServicesCardz heading={items.heading} content={items.textContent} images={items.images} />
            </div>
          ))}
        </div>
        <div className="row position-relative my-4">
          <div className="row" id='main-heading-sec'>
            <div className="col-md-12 text-center my-5">
              <h1 className='text-white fw-bolder' ref={mainHeadingRef}>Our Workshops, Webinars and Guest Lectures</h1>
            </div>
          </div>
          <div className="col-md-6 align-content-center">
            <img src={Seminar} ref={imageRef} className='w-100' style={{ objectFit: 'cover' }} alt="" />
            <a href="#" id='btn' className='px-5 py-3 text-decoration-none text-white fw-bolder mt-5' style={{borderRadius: '30px'}}>Enroll Now</a>
          </div>
          <div className="col-md-6 position-relative">
            <ul style={{ listStyle: 'none' }}>
              {listItems.map((items, index) => (
                <li key={index} ref={(el) => (listItemsRef.current[index] = el)}>
                  <Items heading={items.heading} content={items.text} images={items.images} />
                </li>
              ))}
              <span id='shade9'></span>
            </ul>
          </div>
        </div>
        <div className="row" style={{marginTop: '70px'}}>
            <div className="col-md-12 text-center">
                <h1 id='milestone' ref={studentSupportRef}>Student Support Services:</h1>
            </div>
        </div>
        <div className="row my-5" id='studentSupport'>
              {studentSupport.map((items, index) => (
                <div className='col-md-3' key={index} ref={(el) => (studentCardRef.current[index] = el)}>
                    <Students heading={items.heading} content={items.text} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Services;
