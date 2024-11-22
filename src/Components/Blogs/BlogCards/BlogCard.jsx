import React from 'react'

function BlogCard({heading, content, images}) {
  return (
    <>
      <a href='#' className="card text-decoration-none text-white h-100" style={{border: '1px solid #fff', backgroundColor: '#012134'}}>
            <img src={images} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{content}</p>
            </div>
        </a>
    </>
  )
}

export default BlogCard
