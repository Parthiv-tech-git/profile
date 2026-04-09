
import './App.css';
import Abot from './menui/Abot'
import Proj from './menui/Proj'
import Skills from './menui/Skills';
import Edu from './menui/Edu';
import Home from './menui/Home';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
    <div className="main">
      <div className="p">
        profile
      </div>
      <div className="menui">
        <li><Link to="/">Home</Link></li>
      <li><Link to="/about me">About me</Link></li>  
       <li><Link to="/Projects">projects</Link></li>      
           <li><Link to="/skills">skills</Link></li>      
      <li><Link to="/contact">contact</Link></li>
      </div>
       
    </div>

   <div className="rot">
        <button><Link to="/about me">About me</Link></button>
        <button><Link to="/projects">Projects</Link></button>
        <button><Link to="/skills">Skills</Link></button>
        <button><Link to="/contact">contact me</Link></button>
        </div>
    
    
    
      {  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about me' element={<Abot/>} />
      <Route path='/Projects' element={<Proj/>} />
      <Route path='/Skills' element={<Skills/>} />
      <Route path='/contact' element={<Edu/>} />

    </Routes> }
   
    </div>
    
  );
}

export default App;
