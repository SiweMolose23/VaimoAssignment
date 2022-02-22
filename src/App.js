import React, { useState, useRef, useEffect } from 'react'
import ProductPage from './ProductPage';
import ProductImage from './ProductImage';
import Shipping from './Shipping';
import styles from './styles/App.css'

function App() {
  //const [todos, setTodos] = useState([])
  return (
    //A fragment <></> allows you to have multiple html elements 
    <>
    <div className='flexContainer'>
      <div className='left'>
    <ProductImage/>
    </div>
    <div className='middle'>
      <ProductPage min={0} max ={10}/> 
      </div>
      <div className ='right'> 
      <Shipping/>
      </div>  
      </div>
  </>
  );
}

export default App;
