import React from 'react'
function Items({heading, content, images}) {
  return (
    <>
      <h1 id='milestone'>{heading}</h1>
      <p className='text-white'>{content}</p>
    </>
  )
}

export default Items
