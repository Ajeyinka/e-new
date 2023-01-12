import React from 'react'

const Blog = () => {
  return (
    <div className='blog__container' id='contact'>
      <h2>Never Miss A Drop</h2>
      <p>Subscribe to our newsletter, Its totally free and very useful</p>
      <div className='newsletter-input'>
      <input type='email' placeholder='enter your email adress'/>
      <button className='form__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Blog