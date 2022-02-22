import React, {Component, useState, useRef,useEffect} from 'react';
import axios from 'axios';
import lock from './assets/lock.png';
import styles from './styles/Product.css';
import pay from './assets/icons8-apple_pay.svg';
import mastercard from './assets/icons8-mastercard.svg';
import visa from './assets/icons8-visa.svg';
import time from './assets/icons8-clock.png';
import expo from './assets/Logo.png';
import minus from './assets/icons8-minus.png';

import plus from './assets/icons8-plus_math.png';
import Incrementor from './Incrementor';
import forward from './assets/icons8-forward.png';
import Rating from './Rating';
import tick from './assets/icons8-ok.png';


  const url = 'https://fe-assignment.vaimo.net/';
  //Load Product Data
// function Product() {
//   const response =  axios.get(url).then(value => {console.log(value.data.product)});
//   //const data = await response.json();
//  //console.log(response);

//  }


 export const Image = axios.get(url).then(value =>value.data.product.gallery);
export const PriceData = axios.get(url).then(value =>value.data.product.options);
 export const leadTime = axios.get(url).then(value =>value.data.product.gallery);
 //export const Image2 = axios.get(url).then(value =>value.data.product.gallery.main);

//Get Product Description
    //const desc =  axios.get(url).then(value =>value.data.product.name);

export default function ProductPage( {min,nax} ) {
  return (
    <>
    <div className="productDesc">
    <div className='avail'><p>
    <span className='gradient'>Ready to Ship</span><span className='bgColor'><img className = 'ok' src={tick} alt='Tick Sign'></img> In Stock <img className = 'ok' src={tick} alt='Tick Sign'></img> Fast Dispatch</span>
    
    </p></div>
        <div className='desc'><p> 
          202 hot selling GPS 5G quadcopter drone with remote control aircraft drone WiFi mini drone camera
        &nbsp; <span className='sale '>Hot sale product </span>
          </p>
          <Rating props = {5}/>
          </div>
          <br/>

    {/* <h1>{Product()}</h1> */}
    <div className='banner'>
     <p><img className = 'expo' src={expo} alt='March expo'></img> <ul className='bannerList'> <li>Free shipping (up to $40)</li> <li> On-time delivery guaranteed</li>
     </ul> &ensp; <img className = 'bannerTxt' src={forward} alt='Forward sign'></img>
      </p>
     </div>
    <br/>
<div className='countdown'>
    <p> <span className='discount'>Discount ends in </span>  &emsp; <img className = 'time' src={time} alt='countdown'></img> </p>
  </div>
  <table className='tableOptions'>
<tr>
  <td><span className='options'>Options:</span></td>
  <td>1080P</td>
  <td>R833.99</td>
  <td>
  <p className='inputOption'>
  {/* <img className ='minus' src={minus} alt='minus' onClick={decr}></img><input className='input' type='number' ></input><img className = 'plus' src={plus} alt='plus' onClick={incr}></img>
  </p> */}
  <Incrementor/>
  </p>
  </td>
</tr>
<tr>
  <td></td>
  <td>4K</td>
  <td>R895</td>
  <td><Incrementor/></td>
</tr>
<tr>
  <td></td>
  <td>Battery(accessory)</td>
  <td>R78.50</td>
  <td><Incrementor/></td>
</tr>
    </table> 

<p className='assuranceTxt'> <img className = 'lock' src={lock} alt='orange icon'></img>   <span className='bold'>Trade Assurance</span> protects your Alibaba.com orders</p> 
<p className='assuranceTxt'>Payments: <img className = 'icons' src={visa} alt='icon'></img><img className = 'icons' src={mastercard} alt=' icon'></img><img className = 'iconPlay' src={pay} alt=' icon'></img> </p>
<p className='assuranceTxt'>Alibaba.com Logistics &ensp; Inspection Solutions</p> 


      </div>
      </>
  )
}
