
import React from 'react'
import j from './j.png'
import  './Ho.css'
import { Link } from 'react-router-dom'
const Home = () => {
 
  
  return (
    <div className="cos">
    <div className="me">
      <h2>Hola ,This is  </h2>
      <h1> Mr.D .Parthiv kumar</h1> 
      <p>hey!, I am a mini Btech students ,currently I am purseing 4th semeter <br />
        in computer science  enng at warangal dist ,Telangana state. And finally I am looking for intenship in forntend devlovement  </p>
    </div>
         <div className="pho">
          <img id='photoH' src={j}  alt='imahrf'/>
    
         </div>
         <div className="rot">
        <button><Link to="/about me">About me</Link></button>
        <button><Link to="/projects">Projects</Link></button>
        <button><Link to="/skills">Skills</Link></button>
        <button><Link to="/contact">contact me</Link></button>
        </div>
    </div>
  )
}

export default  Home