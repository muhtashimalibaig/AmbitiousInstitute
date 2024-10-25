import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import founder from '../../assets/Founder.webp'
import team2 from '../../assets/team2.webp'
import team3 from '../../assets/team3.jfif'
import hand from '../../assets/hand.png'
function About() {
  return (
    <>
      <div id='about' className="container position-relative my-5 pb-4">
        <div className="row">
            <div className="position-relative col-md-12 py-5 text-center">
                <h1 className='text-white mb-4 about-heading'>About <span style={{color: '#f4a610'}}>Us</span></h1>
                <div className="text-content">
                    <p>Ambitious Trainings was founded with the vision of empowering individuals and professionals to excel in their respective fields through high-quality, practical training programs. The institute focuses on equipping learners with the latest industry knowledge and skills in areas such as technology, business development, leadership, and personal growth.</p>
                    <p>From its inception, Ambitious Trainings has been driven by a commitment to excellence and the belief that everyone has the potential to achieve greatness. The institute prides itself on offering a blend of theoretical learning with hands-on experience, ensuring that every participant walks away with both knowledge and practical skills they can apply immediately in their careers.</p>
                </div>
            </div>
            <div className='hand'>
                <img src={hand} style={{maxWidth: '100px'}} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className='text-center'>
                <h1 id='milestone' className='text-center'>Milestones</h1>
                </div>
                <div className="text--milestone text-center mt-4">
                    <h4 className='text-white fw-bold'>First 100 Graduates:</h4>
                    <p style={{color: '#dadada'}}>Within the first year, the institute celebrated the graduation of its first 100 students, many of whom went on to advance their careers in leading companies.</p>
                    <h4 className='text-white fw-bold'>Expansion of Course Offerings:</h4>
                    <p style={{color: '#dadada'}}>Ambitious Trainings expanded its curriculum to include a wider range of subjects, including data analytics, leadership, and soft skills, meeting the growing demand for diverse professional development.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className='text-center'>
                <h1 id='milestone'>Missions & Vision</h1>
                </div>
                <div className='mt-3 text-center'>
                    <h4 className='text-white fw-bold'>Our Mission:</h4>
                    <p style={{color: '#dadada'}}><strong>Ambitious Trainings</strong> is dedicated to empowering individuals with the skills and knowledge needed to excel in today's competitive world. Through innovative and practical training programs, we aim to bridge the gap between theoretical learning and real-world application.</p>
                    <h4 className='text-white fw-bold'>Our Vision:</h4>
                    <p style={{color: '#dadada'}}>Our vision is to become a global leader in professional development, setting the standard for quality education and transformative training experiences. We strive to cultivate a world where individuals from all backgrounds can unlock their full potential and contribute meaningfully to society.</p>
                </div>
            </div>
        </div>
        <div className="row mt-5 position-relative">
            <div className="col-md-12 text-center">
                <h1 id='milestone'>Leadership Team</h1>
                <h1 className='fw-bolder text-white my-5'>Coming Soon.....</h1>
            </div>
        </div>
        {/* <div className="row mt-5">
            <div className="col-md-3">
            <div className="card bg-transparent" style={{border: '1px solid #fff'}}>
            <img src={founder} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-white">John Davis - Founder & CEO</h5>
                <p className="card-text text-white" style={{fontSize: '14px'}}>With over 15 years of experience in professional development and training, John Davis founded Ambitious Trainings to provide cutting-edge learning solutions for individuals and businesses.</p>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card bg-transparent h-100" style={{border: '1px solid #fff'}}>
            <img src={team2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-white">Mitchell - Director of Training Programs</h5>
                <p className="card-text text-white" style={{fontSize: '14px'}}>Sarah is the driving force behind the development of Ambitious Trainings’ curriculum. With a background in instructional design and a passion for education, she ensures that every program is up-to-date with the latest trends and technologies.</p>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card bg-transparent" style={{border: '1px solid #fff'}}>
            <img src={team3} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-white">David Chief Technology Officer (CTO)</h5>
                <p className="card-text text-white" style={{fontSize: '14px'}}>As the CTO, David Lee oversees the technical infrastructure of Ambitious Trainings, ensuring seamless digital learning experiences. With expertise in software development and cloud-based education platforms, </p>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card bg-transparent" style={{border: '1px solid #fff'}}>
            <img src={founder} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-white">Michael Green - Head of Marketing & Partnerships</h5>
                <p className="card-text text-white" style={{fontSize: '14px'}}>Green is responsible for expanding the institute’s reach through strategic marketing initiatives and global partnerships. With her vast experience in brand management and digital marketing.</p>
            </div>
            </div>
            </div>
        </div> */}
        {/* <div className="row mt-5">
            <div className="col-md-12 text-center"><h1 id='milestone'>Testimonials / Student Stories</h1></div>
        </div>
        <div className="row my-5" id='students'>
            <div className="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">Carlos Martinez</h5>
                    <h6 class="card-subtitle mb-2">Small Business Owner</h6>
                    <p class="card-text">The training I received from Ambitious Trainings was top-notch. The business strategy course opened my eyes to new ways of growing my company. The instructors were incredibly supportive, and the lessons were practical and easy to implement. Since completing the course, my business has seen a 30% increase in revenue!</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">Jessica Roberts</h5>
                    <h6 class="card-subtitle mb-2"> Marketing Professional</h6>
                    <p class="card-text">Ambitious Trainings transformed my career! The hands-on courses and expert instructors helped me gain practical skills that I immediately applied to my job. I was able to take on new responsibilities, and within months, I received a promotion. I highly recommend their programs to anyone looking to advance their career</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">Aisha Khan</h5>
                    <h6 class="card-subtitle mb-2">Software Developer</h6>
                    <p class="card-text">I was looking to improve my coding skills, and Ambitious Trainings delivered beyond my expectations. The real-world projects we worked on were challenging but extremely rewarding. The course gave me the confidence to apply for new roles, and I landed a job at a tech startup within weeks of finishing the program</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">David Parker</h5>
                    <h6 class="card-subtitle mb-2">Graphic Designer</h6>
                    <p class="card-text">Ambitious Trainings helped me move from freelance work to a full-time position at a top agency. The creative design program was well-structured, and the instructors were professionals who knew the industry inside out. I’ve gained so much confidence and skill thanks to the training I received.</p>
                </div>
                </div>
            </div>
        </div> */}
      </div>
    </>
  )
}

export default About
