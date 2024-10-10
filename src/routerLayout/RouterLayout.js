import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Header from '../components/header/Header'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'
import Footer from '../components/footer/Footer'

const RouterLayout = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/portfolio-react" element={<Home/>}></Route>
    <Route path="/Projects" element={<Projects/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default RouterLayout