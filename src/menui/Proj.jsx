import React from 'react'
import'./Pro.css'
import pho from './photoo/profilee.png'
import pho1 from './photoo/addi.png'
import pho2 from './photoo/con.png'
import pho3 from './photoo/dictio.png'
import pho4 from './photoo/fas.png'
import pho5  from './photoo/jg.png'

const Proj = () => {
  return (
    
    <div className="b">
   
    <div className="proj">
     
  
        <div className="pr"> 
          <img className='proj3' src={pho} alt="proffilee" />
          <h1 className='proid'> profile</h1>
          <p className='prop'>This is application is portfolio,which is see now.I bulid with <b>react js</b>
          <br />This application is descrbes about me. </p>
        </div>
        <div className="pr">
            <img className='proj3' src={pho3} alt="dic" />
             <h1 className='proid'>Dictionary</h1>
              <p className='prop'> This apllication is simple Dictionary , the user enter thr word ,this application generator the definitaion of word . <br />for details checkout my github</p>
        </div>
        <div className="pr">
         <img className='proj3' src={pho1} alt="adddi" />
          <h1 className='proid'> addind of two num</h1>
           <p className='prop'> This is application the user can add any two number. This is a basic apllication in react .I bulit with <b>react.</b>
           <br />For more details check my github.</p>
        </div>
        <div className="pr">
            <img className='proj3' src={pho2} alt="contr" />
             <h1 className='proid'>counter </h1>
             
        </div>
        
        <div className="pr">
            <img className='proj3' src={pho4} alt="fash" />
             <h1 className='proid'> fashionwebsite</h1>
            
        </div>
    <div className="pr">
            <img className='proj3' src={pho5} alt="jg" />
             <h1 className='proid'>joke generator</h1>
              
        </div>
   
   </div>
    </div>
  )
}

export default Proj