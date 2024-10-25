import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css'
import It from '../../assets/It.jfif'
import trends from '../../assets/trends.jfif'
import technologies from '../../assets/technologies.jfif'
import caseStudy from '../../assets/caseStudy.jfif'
import CaseStudy2 from '../../assets/CaseStudy2.jfif'
import BlogCard from './BlogCards/BlogCard';
import CaseStudyCard from './CaseStudies/CaseStudyCard';

function Blog() {
    const blogCardContent = [
        {
            image: It,
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
  return (
    <>
      <div className="container my-5" id='blogs'>
        <div className="row">
            <div className="col-md-12 text-center position-relative">
                <h1 className='text-white'>Bl<span style={{color: '#f4a910'}}>ogs</span></h1>
                <span className='shade4'></span>
            </div>
        </div>
        <div className="row my-5">
            {blogCardContent.map((items, index) => (
                <div className='col-md-4' key={index}>
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
                <div className='col-md-4' key={index}>
                    <CaseStudyCard heading={items.heading} content={items.content} images={items.image} />
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Blog
