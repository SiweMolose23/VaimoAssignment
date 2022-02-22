import React, {Component, useState, useRef,useEffect} from 'react';
import axios from 'axios';

import stars from './assets/icons8-star_filled.png';

const Rating = (props) => {
const[rating,setRating] = useState(null);
return(
  // Create ratings for products based on rating (props)
<div>
{[...Array(props)].map((star)=>{
    <img className = 'star' src={stars} alt='Rating'></img>
})}

</div>
);
  };

  export default  Rating;