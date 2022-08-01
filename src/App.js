import { useState } from 'react';
import { NavLink,Link,Routes,Route } from 'react-router-dom';
import Rating from './component/Rating';
import './App.css';
import Complete from './component/Complete';
// import star from './images/icon-star.svg'

function App() {
  const starRating = [1,2,3,4,5];
  let [rating,setRating] = useState(1)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(rating)
    alert('submitted')
  }

  return (
    <main className="App">
      <Routes>
         <Route path='/' element={<Rating 
         rating={rating} 
         setRating={setRating} 
         handleSubmit={handleSubmit}
         starRating={starRating}/>} />
         <Route path='/complete' element={<Complete rating={rating}/>}/>
      </Routes>
     
    </main>
  );
}

export default App;
