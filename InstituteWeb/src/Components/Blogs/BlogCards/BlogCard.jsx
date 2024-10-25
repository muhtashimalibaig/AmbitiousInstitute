import React from 'react'

function BlogCard({heading, content, images}) {
  return (
    <>
      <a href='#' className="card text-decoration-none text-white bg-black h-100" style={{border: '1px solid #fff'}}>
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
