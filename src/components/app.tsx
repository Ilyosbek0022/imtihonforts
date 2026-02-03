import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import About from "../pages/about/about"
import Keyboards from "../pages/keyboards/keyboards"
import Name from "../pages/name/name"
import Contact from "../pages/contact/contact"
import Home from "../pages/home/home"



const App = () => {
    
  return (
    <div id="app">
   
 <header>
    <div className="between">
        
        <Link to="/" className="logolink"><div className="logo"><img src="/razer.svg" alt=""/>
       <h1 className="name">Levicey</h1>
   </div></Link>
   
        <div className="center">
         <Link to="/about" className='a'>About</Link>
         <Link to="/keyboards" className="a">Keyboards</Link>
         <Link to="/name" className="a">Levioca</Link>
         <Link to="/contact" className="a">Contact</Link>
        </div>
      
        <div className="signup"><a href="#" className="a">Sign-up</a><button className="attraction">Log-in</button></div>
        
    </div>
 </header>
 
   <Routes>
   <Route path="/" element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/keyboards' element={<Keyboards/>}></Route>
    <Route path='/name' element={<Name/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

</Routes>
 </div>
  
  )
}

export default App
