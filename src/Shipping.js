import React, {Component, useState, useRef} from 'react';
import ProductPage from './ProductPage';
import styles from './styles/Shipping.css'
//When importing constants such as arrays of data etc use {}
import {Data} from './ProductPage';
import msg from './assets/icons8-envelope.png';

//Total Price calculation
function totalCal(props){

}

// Display Purchasing Options
export default function Shipping() {
  return (
    
    <>
    <table className='purchaseSidebar'>
    <tr>
    <td>
        <p className='purchaseDetails'>Ship to</p>
        <span>

        </span>
        </td>
        <td>
        <p className='summaryPrice'></p>
        </td>
          </tr>
          <tr>
          <td>
        <p className='purchaseDetails'>Lead Time</p> 
        <span className='leadTime'>
        
        </span>
        </td>
        </tr>
        <tr>
        <td>
        <label className='purchaseDetails'>Shipping Time</label>
        </td>
        </tr>
        <br/>
        <br/>
        <button className='login'>Login to Purchase</button>
        
    </table>
         <br/>
          <br/>
        <button className='contact'> <img className = 'msg' src={msg} alt='Envelope'></img> Contact the Supplier</button>
      </>
  
  )
}
