import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import About from './routes/About'
import Committees from './routes/Committees'
import Leadership from './routes/Leadership'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/committees' element={<Committees/>}/>
      <Route path='/leadership' element={<Leadership/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
