import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import About from './routes/About'
import Committees from './routes/Committees'
import Leadership from './routes/Leadership'
import Footer from './components/Footer'
import Contacts from './routes/Contacts'
import Congregations from './routes/Congregations'
import NotFound from './routes/NotFound'
import Give from './routes/Give'
import Events from './routes/Events'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/committees' element={<Committees/>}/>
      <Route path='/leadership' element={<Leadership/>}/>
      <Route path='/contactus' element={<Contacts/>}/>
      <Route path='/congregation' element={<Congregations/>}/>
      <Route path='/give' element={<Give/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
