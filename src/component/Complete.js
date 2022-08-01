import React from 'react'
import receipt from '../images/illustration-thank-you.svg'

function Complete({rating}) {
    const item = { 
        hidden: { x: -10, opacity: 0 },
       visible : {
         x : 0,
         opacity : 1
       } }

  return (
    <section className='Complete'>
        <div className='thank-img' style={{
            "padding":"10px"}}>
            <img src={receipt} alt="thank you" />
        </div>
        <h3 className='orange-text'
        style={{
            "backgroundColor": "hsl(213, 19%, 18%)",
            "padding":"5px 10px",
            "borderRadius":'50px'}}>You selected {rating} out of 5</h3>
        <section className='feedback-text'>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating.
            if you ever need more support, dont hesitate to get in touch.
          </p>
        </section>
    </section>
  )
}

export default Complete