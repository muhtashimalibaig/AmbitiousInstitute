import React from 'react'

function CaseStudyCard({heading, content, images}) {
  return (
    <>
      <div className="card bg-transparent text-white" style={{border: '1px solid #fff'}}>
    <img src={images} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">{content}</p>
  </div>
</div>
    </>
  )
}

export default CaseStudyCard
