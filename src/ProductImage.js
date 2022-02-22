import React, {Component, useState, useRef} from 'react';
import axios from 'axios';
import ProductPage from './ProductPage';
import Test from './Image.jpg'
import styles from './styles/Image.css'

//When importing constants such as arrays of data etc use {}
import {Image} from './ProductPage';

var please;

// Receive ImageURL from API Promise
function getImage() {
Image.then(value => {
   //console.log(value[0].main)
   const imageURL = value[0].main;
   please = value[0].main;
   please = value;
   console.log(imageURL);
   return imageURL
   
 })
.catch(err =>{console.log(err)});
}

const url = getImage();

// Display Product Image from API
export default function ProductImage() {
    return (
      <div className="Image">

        <img className= {styles.productImage} src={Test} alt='ProductImage'></img>
   
          </div>
    );
}