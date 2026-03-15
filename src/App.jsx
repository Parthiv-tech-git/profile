
import './App.css';
import Abot from './menui/Abot'
import Proj from './menui/Proj'
import Skills from './menui/Skills';
import Edu from './menui/Edu';
import  j from'./j.png'




function App() {
  return (
    <div className="App">
      <div className="i">
    <div className="main">
      <div className="p">
        profile
      </div>
      <div className="menui">
    
        <li>Home</li>
        
      <li>About me</li>

      
       <li>projects</li>
      
      
           <li>skills</li>
      
     
      
      <li>contact</li>

      </div>
      
    </div>

    </div>
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
        
    </div>
    
    
      { /* <Routes>
      <Route path='/about me' element={<Abot/>} />
      <Route path='/Projects' element={<Proj/>} />
      <Route path='/Skills' element={<Skills/>} />
      <Route path='/contact' element={<Edu/>} />

    </Routes> */}
    <Abot/>
    <Proj/>
    <Skills/>
    <Edu/>
    </div>
    
  );
}

export default App;
