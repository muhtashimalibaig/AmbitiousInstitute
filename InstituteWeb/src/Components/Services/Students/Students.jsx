import React from 'react'
import './StudentSupport.css'

function Students({heading, content}) {
  return (
    <>
      <div className="card h-100">
  <div className="card-body">
    <h5 className="card-title">{heading}</h5>
    <p className="card-text">{content}</p>
  </div>
</div>
    </>
  )
}

export default Students
