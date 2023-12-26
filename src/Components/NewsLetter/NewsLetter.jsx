import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your E-mail</h1>
        <p>Subscribe to our Newsletter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Your E-mail Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
