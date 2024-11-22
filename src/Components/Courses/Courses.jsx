import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Courses.css'
import Cards from './CousesCards/Cards';
import WebDevelopment from '../../assets/webDev.jpeg';
import computer from '../../assets/computerExpertise.jpeg';
import graphicDesign from '../../assets/graphicDesigning.jpeg';
import fullStack from '../../assets/fullStack.jfif'
import userExp from '../../assets/userExp.jfif'
import videoEditing from '../../assets/videoEditing.jpeg';
import Unity from '../../assets/Unity.png';
import gameDevelopment from '../../assets/Game.jpeg';
import AppDevelopment from '../../assets/app.jpeg';
import fiverr from '../../assets/Spoken.png';
import spokenEnglish from '../../assets/spokenEnglish.jfif'

import BatchesCard from './Batches/BatchesCard';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger);
const courses = [
  {
    image: WebDevelopment,
    title: "Web Development",
    description: "Learn how to build websites and web applications from scratch.",
    duration: '2 Months',
    prerequisites: 'Basic understanding of HTML, CSS, and JavaScript. Familiarity with web browsers and how websites work.'
  },
  {
      image: computer,
      title: "Computer Expertise",
      description: "A computer expertise course covers essential skills in hardware, software, networking, and troubleshooting for proficient",
      duration: '2 Months',
      prerequisites: 'Basic knowledge of computer operation, familiarity with operating systems, and a foundational understanding of hardware and software concepts are prerequisites for a computer expertise course.'
  },
  {
      image: fullStack,
      title: "Full Stack Graphic Designing",
      description: "A full-stack graphic designing course teaches comprehensive design skills, including visual design, UI/UX.",
      duration: '6 Months',
      prerequisites: 'Basic understanding of design principles, familiarity with graphic design software, and a creative mindset are prerequisites for a full-stack graphic designing course.'
  },
  {
      image: graphicDesign,
      title: "Graphic Designing",
      description: "Graphic designing involves creating visual content to communicate messages through typography, imagery, color, and layout.",
      duration: '2 Months',
      prerequisites: 'Basic creativity, familiarity with design software, and an understanding of visual communication principles are prerequisites for a graphic designing course.'
  },
  {
      image: userExp,
      title: "UI & UX Designing",
      description: "UI and UX designing focuses on creating visually appealing, user-friendly interfaces (UI) and enhancing the overall user experience (UX) through intuitive, efficient design solutions.",
      duration: '2 Months',
      prerequisites: 'Basic knowledge of design principles, an understanding of user behavior, and familiarity with design tools are prerequisites for a UI and UX course.'
  },
  {
      image: videoEditing,
      title: "Video Editing and Animations",
      description: "Video editing and animation involve crafting and enhancing visual content by cutting, arranging, and adding effects, transitions, and motion graphics to create engaging and dynamic videos.",
      duration: '2 Months',
      prerequisites: 'Basic computer skills, familiarity with video editing software, and a creative eye for visual storytelling are prerequisites for a video editing and animations course.'
  },
  {
      image: Unity,
      title: "CG Artist",
      description: "A CG artist creates three-dimensional digital graphics and animations for various media, including films, video games, and virtual reality, using specialized software and artistic skills.",
      duration: '2 Months',
      prerequisites: 'Basic knowledge of art and design principles, familiarity with 3D modeling software, and a passion for digital creativity are prerequisites for a CG artist course.'
  },
  {
      image: gameDevelopment,
      title: "Game Development",
      description: "Game development is the process of designing, creating, and programming video games, encompassing gameplay mechanics, graphics, sound, and storytelling to deliver an engaging player experience.",
      duration: '2 Months',
      prerequisites: 'Basic programming knowledge, familiarity with game design principles, and a passion for gaming are prerequisites for a game development course.'
  },
  {
      image: AppDevelopment,
      title: "Android App Development",
      description: "Android app development involves designing, coding, and deploying applications for Android devices using programming languages like Java or Kotlin, along with development tools like Android Studio.",
      duration: '3 Months',
      prerequisites: 'Basic programming skills, familiarity with Java or Kotlin, and an understanding of software development principles are prerequisites for an Android app development course.'
  },
  {
      image: fiverr,
      title: "Freelancing Training",
      description: "Freelancing training equips individuals with the skills to successfully manage their own business, including client acquisition, project management, and financial planning, tailored for freelance work.",
      duration: '2 Months',
      prerequisites: 'Basic communication skills, a strong work ethic, and a willingness to learn about self-marketing and client management are prerequisites for freelancing training courses.'
  },
  {
      image: spokenEnglish,
      title: "Spoken English",
      description: "Spoken English focuses on developing verbal communication skills in English, enhancing pronunciation, fluency, and confidence for effective interpersonal interactions.",
      duration: '2 Months',
      prerequisites: 'A basic understanding of English vocabulary and grammar, along with a desire to improve speaking skills, are prerequisites for a spoken English course.'
  }
];
const batches = [
  {
      title: 'Web Development',
      duration: '12 weeks',
      nextBatch: 'October 10, 2024',
      mode: 'Online and In-Person',
      description: 'Learn how to build responsive and dynamic websites from scratch. This course covers HTML, CSS, JavaScript, and popular frameworks like React and Bootstrap.'
  },
  {
      title: 'Cyber Security',
      duration: '12 weeks',
      nextBatch: 'November 1, 2024',
      mode: 'Online Only',
      description: 'Dive into the world of cybersecurity. From understanding threat detection to ethical hacking, this course prepares you for a successful career in protecting digital environments.'
  },
  {
      title: 'Data Sciences',
      duration: '14 weeks',
      nextBatch: 'November 1, 2024',
      mode: 'Online and In-Person',
      description: ' Master the essentials of data analysis, machine learning, and data visualization. Learn how to handle big data and make data-driven decisions using Python and R.'
  }
]
function Courses() {
  const headRef = useRef(null);
  const smallText = useRef(null);
  const cardsRef = useRef([])
  useEffect(() => {
    gsap.from(headRef.current, {
      y: 100,
      duration: 1,
      opacity: 0
    })
    gsap.from(smallText.current, {
      y: 50,
      duration: 1,
      opacity: 0,
      delay: .5
    })
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scale: .2,
      });
    });
  }, [])
  return (
    <>
      <div id='courses' className="container position-relative my-5" style={{borderBottom: '1px solid #666', paddingBottom: '100px'}}>
        <div className="row pb-4">
          <div className="col-md-12 text-center">
            <h1 className='text-white d-inline-block' style={{borderBottom: '1px solid orange'}} ref={headRef}>Course Offerings</h1>
            <p className='text-white my-3' ref={smallText}>We Offer Many Technical Courses:</p>
          </div>
        </div>
        <div className="row">
          {courses.map((course, index) => (
              <div className="col-md-4 mb-5"
              ref={(el) => (cardsRef.current[index] = el)}
               key={index}>
              <Cards image={course.image} title={course.title} description={course.description} duration={course.duration} prerequisites={course.prerequisites} id={index} />
            </div>
          ))}
        </div>
        <div className="row my-5">
            <div className="col-md-12 text-center">
                <h1 id='milestone'>Up Coming Batches</h1>
            </div>
        </div>
        <div className="row" id='batches'>
          {/* {batches.map((batches, index) => (
            <div className='col-md-4' key={index}>
                <BatchesCard batchName={batches.title} nextBatch={batches.nextBatch} durationBatch={batches.duration} mode={batches.mode} descriptionBatch={batches.description} />
            </div>
          ))            
          } */}
        </div>
      </div>
    </>
  )
}

export default Courses;
