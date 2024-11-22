import React from 'react'
import './Faq.css'
function Faq() {
  return (
    <>
    <div className="container my-5">
        <div className="row my-5">
            <div className="col-md-12 text-center">
                <h1 className='text-white' style={{fontStyle: 'italic'}}>FaQ</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item mb-4" style={{borderRadius: '50px'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-white fw-bolder fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What types of courses does Ambitious Trainings Institute offer?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color: '#fff', letterSpacing: '1.3px',lineHeight: '1.8rem'}}>Ambitious Trainings Institute offers a variety of courses including professional <code style={{color: 'orange'}}>development programs</code>, technical skill enhancement, certifications in various fields such as IT, <code style={{color: 'orange'}}> business management</code>, <code style={{color: 'orange'}}>digital marketing</code>, and more. We also provide specialized training for different industries and tailored programs for corporate clients.</div>
    </div>
  </div>
  <div className="accordion-item mb-4" style={{borderRadius: '50px'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-white fw-bolder fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How can I enroll in a course at Ambitious Trainings Institute?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color: '#fff', letterSpacing: '1.3px',lineHeight: '1.8rem'}}>To enroll in a course, visit our website and navigate to the "Courses" section. Select the course you’re interested in and follow the instructions to <code style={{color: 'orange'}}>register</code>. Alternatively, you can contact our admissions office via phone or email for assistance with the <code style={{color: 'orange'}}>enrollment</code> process.</div>
    </div>
  </div>
  <div className="accordion-item mb-4" style={{borderRadius: '50px'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-white fw-bolder fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What are the qualifications of the instructors at Ambitious Trainings Institute?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color: '#f4a910',letterSpacing: '1.3px',lineHeight: '1.8rem'}}>Our instructors are highly qualified professionals with extensive experience in their respective fields. They hold advanced degrees, relevant certifications, and have practical experience working in industry. Each instructor is selected based on their <code style={{color: 'orange'}}>expertise</code> and ability to effectively teach and <code style={{color: 'orange'}}>engage students</code>.</div>
    </div>
  </div>
  <div className="accordion-item mb-4" style={{borderRadius: '50px'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-white fw-bolder fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Are there any scholarships or financial aid options available?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color: '#f4a910',letterSpacing: '1.3px',lineHeight: '1.8rem'}}>Yes, <code style={{color: 'orange'}}>Ambitious Trainings Institute</code> offers a range of scholarships and financial aid options to eligible students. These include merit-based scholarships, need-based financial assistance, and corporate sponsorships. Visit our website or contact our financial aid office for more information on available options and application procedures.</div>
    </div>
  </div>
  <div className="accordion-item mb-4" style={{borderRadius: '50px'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-white fw-bolder fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      What support services are available to students?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color: '#f4a910',letterSpacing: '1.3px',lineHeight: '1.8rem'}}>We provide a variety of support services to ensure student success, including academic advising, career counseling, mentorship programs, and technical support. Our dedicated support team is available to assist with any questions or concerns you may have throughout your training experience.</div>
    </div>
  </div>
  
</div>
</div>
        </div>
    </div>
    </>
  )
}

export default Faq
