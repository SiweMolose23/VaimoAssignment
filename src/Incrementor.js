import React, {Component, useState, useRef,useEffect} from 'react';
import axios from 'axios';

import minus from './assets/icons8-minus.png';
import plus from './assets/icons8-plus_math.png';


const Incrementor = () => {
  const[value, setValue] = useState(0);

  const decr = () => {
    setValue(c=> Math.max(value -1,0));
  }

  const incr = () => {
    setValue(value => value+1);
  }
  
  const handleNegative= (e) =>{
    if(!isNaN(e.target.value)){
      setValue(e.target.value);
    }
  };
  return (
    <>
    <p className='inputOption'>
    <div className='borderBoxMinus'>
  <img className ='minus' src={minus} alt='minus' onClick={decr}></img>
  </div>
  <input className='input' type='number' value={value}
  onChange = {handleNegative} ></input>
  <div className='borderBoxPlus'>
  <img className = 'plus' src={plus} alt='plus' onClick={incr}></img>
  </div>
  </p>
  </>
  )
}

export default Incrementor



