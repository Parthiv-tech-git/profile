import './Sk.css'
import React from 'react'
import sk from '../menui/photoo/c.jpeg'
import sk1 from '../menui/photoo/cpp.jpeg'
import sk2 from '../menui/photoo/py.jpeg'
import sk3 from '../menui/photoo/js.jpeg'
import sk4 from '../menui/photoo/html.jpeg'
import sk5 from '../menui/photoo/rea.jpeg'
import sk6 from '../menui/photoo/sql.jpeg'
import sk7 from '../menui/photoo/jav.jpeg'
import sk8 from '../menui/photoo/c.jpeg'



const Skills = () => {
  return (
    <div className="sk">
        
        <div className="m9">
          <img className='sk1'src={sk} alt="" />
            <h1 className='proi'>C language </h1>
            <li>I can rate my self in this language is 8.5 out of 10</li>
            <p className='deta' >this is my first language ,which is very easy to me .upto pointer I known well.</p>
        </div>
        <div className="m9">
              <img className='sk1'src={sk1} alt="" />
                <h1 className='proi'>C++</h1>
                  <li>I can rate my self in this language is 7.8 out of 10</li>
                   <p className='deta' >In cpp ,I known some topice like inhertiance, class & object etc..</p>
        </div>
        <div className="m9">    <img className='sk1'src={sk2} alt="" />
          <h1 className='proi'>Python </h1>
            <li>I can rate my self in this language is 8 out of 10</li>
             <p className='deta' >upto installation of  virtual enviromental . I can handle this language.</p>
        </div>
        <div className="m9">
              <img className='sk1'src={ sk3} alt="" />
                <h1 className='proi'>Javascript </h1>
                  <li>I can rate my self in this language is 9 out of 10</li>
                   <p className='deta' > Almost had completed all topices in Javascript.I need more particle of ES6. </p>
        </div>
        <div className="m9">
              <img className='sk1'src={sk4} alt="" />
                <h1 className='proi'>HTML5 </h1>
                  <li>I can rate my self in this language is 8.3 out of 10</li>
                   <p className='deta' >I am ok in this Langugage.</p>
        </div>
        <div className="m9">
              <img className='sk1'src={sk5} alt="" />
                <h1 className='proi'>React js </h1>
                  <li>I can rate my self in this language is 7 out of 10</li>
                   <p className='deta' >Recently I had entered in this language . I am working on this language .</p>
        </div>
        <div className="m9">
              <img className='sk1'src={sk6} alt="" />
                <h1 className='proi'>MYsql </h1>
                  <li>I can rate my self in this language is 6 out of 10</li>
                   <p className='deta' > </p>
        </div>
        <div className="m9">
                        <img className='sk1'src={sk7} alt="" />
                          <h1 className='proi'> java</h1>
                            <li>I can rate my self in this language is 7 out of 10</li>
                             <p className='deta' > I am good at in this language. I have to learn more</p>

          
        </div>
        <div className="m9">
                        <img className='sk1'src={sk8} alt="" />
                          <h1 className='proi'>css </h1>
                            <li>I can rate my self in this language is 8 out of 10</li>
                             <p className='deta' >Css is <b>sea</b>... </p>

        </div>
        
    </div>
  )
}

export default Skills