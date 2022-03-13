import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  )
}
