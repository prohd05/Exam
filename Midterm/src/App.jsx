import { useState } from 'react'
import './App.css'
import Navbar from './comp/navbar.jsx'

import Hero from './pages/hero.jsx'
import Locations from './pages/locations.jsx'
import Tea from './pages/tea.jsx'
import Footer from './comp/footer.jsx'
import Main from './pages/main.jsx'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Main/>}/>
          <Route path='/mission' element={<Hero/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/tea' element={<Tea/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  )
}

export default App
