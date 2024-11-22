import React, { useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css'
// import It from '../../assets/It.jfif'
import trends from '../../assets/trends.jfif'
import technologies from '../../assets/technologies.jfif'
import caseStudy from '../../assets/caseStudy.jfif'
import CaseStudy2 from '../../assets/CaseStudy2.jfif'
import BlogCard from './BlogCards/BlogCard';
import CaseStudyCard from './CaseStudies/CaseStudyCard';
import {gsap} from 'gsap';
import ComputerExpertise from '../../assets/computerExpertise.jpeg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const blogCardContent = [
    {
        image: ComputerExpertise,
        heading: 'Educational content',
        content: 'Explore a diverse range of educational resources designed to enhance your IT skills. From foundational programming concepts to advanced cybersecurity practices, our content covers essential topics such as software development, network management, and cloud computing. '
    },
    {
        image: trends,
        heading: 'Industry Trends',
        content: 'Stay ahead of the curve with insights into the latest industry trends. Discover emerging technologies like AI and machine learning, advancements in cloud computing, and the growing focus on cybersecurity.'
    },
    {
        image: technologies,
        heading: 'Technology',
        content: 'Explore the transformative impact of technology on the IT sector. From cutting-edge advancements in artificial intelligence and machine learning to the integration of blockchain and the evolution of cloud computing, technology continuously reshapes how we manage and utilize information.'
    },

]
const caseStudyContent = [
    {
        image: caseStudy,
        heading: 'Case Study',
        content: 'Discover how our training programs have made a tangible impact in various industries through real-world case studies. For example, a leading tech company utilized our advanced data analytics training to streamline their operations, resulting in a 30% increase in efficiency. '
    },
    {
        image: CaseStudy2,
        heading: 'Case Study',
        content: 'Another client, a healthcare provider, applied our cybersecurity training to enhance their data protection protocols, reducing security breaches by 40%.'
    }
]
function Blog() {
    const blogHeadingRef = useRef(null);
    const blogListRef = useRef([]);
    const caseStudyRef = useRef([])
    useEffect(() => {
        gsap.from(blogHeadingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1
        });
        if (blogListRef.current.length > 0) {
            const tl = gsap.timeline();
            blogListRef.current.forEach((el, index) => {
                tl.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    delay: index * .1,
                });
            });
        }
        if(caseStudyRef.current.length > 0){
            const tl2 = gsap.timeline();
            caseStudyRef.current.forEach((el, index) => {
                tl2.from(el, {
                    scrollTrigger: {
                        trigger: '#Case',
                        start: 'top 60%',
                        scrub: true
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    delay: index * 0.2,
                    scale: .2,
                    stagger: 0.2, 
                    ease: "power1.out", 
                })
            })
        }
        
    }, [])
  return (
    <>
      <div className="container my-5" id='blogs'>
        <div className="row">
            <div className="col-md-12 text-center position-relative">
                <h1 className='text-white' ref={blogHeadingRef}>Blogs</h1>
            </div>
        </div>
        <div className="row my-5"  id='Case'>
            {blogCardContent.map((items, index) => (
                <div className='col-md-4' key={index} ref={(el) => (blogListRef.current[index] = el)}>
                    <BlogCard heading={items.heading} content={items.content} images={items.image} />
                </div>
            ))}
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
                <h1 className='text-white'>Case Studies</h1>
            </div>
        </div>
        <div className="row my-5">
            {caseStudyContent.map((items, index) => (
                <div className='col-md-4' key={index} ref={(el) => (caseStudyRef.current[index] = el)}>
                    <CaseStudyCard heading={items.heading} content={items.content} images={items.image} />
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Blog
