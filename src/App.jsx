import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tech from './pages/Tech'
import Agriculture from './pages/Agriculture'
import Health from './pages/Health'
import Education from './pages/Education'
import { ToastContainer } from 'react-toastify'
import Trending from './pages/Trending'

const App = () => {
  return (
    <>
      <Navbar/>
      <ToastContainer autoClose = {3000}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='trending-news' element={<Trending/>}/>
        <Route path='tech' element={<Tech/>}/>
        <Route path='agriculture' element={<Agriculture/>}/>
        <Route path='health' element={<Health/>}/>
        <Route path='education' element={<Education/>}/>
      </Routes>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
