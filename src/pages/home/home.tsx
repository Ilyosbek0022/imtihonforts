import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from '../contact/contact'
import Name from '../name/name'
import Keyboards from '../keyboards/keyboards'
import About from '../about/about'

const home = () => {
  return (
    <div>
        <main>
    <div className="box">
        <h1 className="h1first">The real beauty of keyboards!!!</h1>
        <h1 className="h1second">Buy now by one click</h1>
        <h3>Keys turn imagination into reality.</h3>
        <button className="attraction batoon">Click</button>
       
    </div>
    <Routes>
   <Route path="/"></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/keyboards' element={<Keyboards/>}></Route>
    <Route path='/name' element={<Name/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

</Routes>
 </main>
    </div>
  )
}

export default home