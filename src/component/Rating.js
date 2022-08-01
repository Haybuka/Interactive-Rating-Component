import React from 'react'
import { Link } from 'react-router-dom';
import star from '../images/icon-star.svg'
function Rating({setRating,rating,handleSubmit,starRating}) {

  return (
    <form onSubmit={handleSubmit}>
     <div className='star-img circle-effect dark-blue_bg'>
          <img src={star} alt="star"/>
       </div>
       <section className='feedback-text'>
          <h1>How did we do ?</h1>
          <p>
            Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!.
          </p>
       </section>
       <ul className='star-rating'>
          {starRating.map( (star,id) => (
              <li className='circle-effect dark-blue_bg' 
                  key={star}
                  onClick={()=>setRating(star)}>{star}</li>
            ))}
       </ul>  
       <Link to="/complete" className='submit-link '>
        <button className='submit-button orange-bg'>Submit</button> 
       </Link>
     </form>
  )
}

export default Rating