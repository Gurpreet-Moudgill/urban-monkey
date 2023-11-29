import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import collabmain1 from '../images/collabmain1.jpg';
import collabmain from '../images/collabmain.jpg';
import collabmain2 from '../images/collabmain2.jpg';
import collabmain3 from '../images/collabmain3.jpg';
import collabmain4 from '../images/collabmain4.jpg';
import collabmain5 from '../images/collabmain5.jpg';
import Spotted from './Spotted';
function Collabration() {
  return (
  <>
  <span className='collab1'>COLLABORATIONS </span>
  <br></br>
  <p className='collaba'></p> 
  
  <img src={collabmain}></img>
  <img src={collabmain1}></img>
  <img src={collabmain2}></img>
  <img src={collabmain3}></img>
  <img src={collabmain4}></img>
  <img src={collabmain5}></img>
  <Spotted/>
  </>
  )
}

export default Collabration
