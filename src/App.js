import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import MenuBar from './components/menuPages/MenuBar'
import MenuMain from './components/menuPages/MenuMain'
import MenuDesserts from './components/menuPages/MenuDesserts'

export default function App() {
  const containerRef = useRef(null)
  const [isVisibleFon, setIsVisibleFon] = useState(false)

  const callbackFunction = ([entry]) => setIsVisibleFon(!entry.isIntersecting)

  const options = {
    root: null,
    rootMargin: '30px',
    threshold: 1
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)

    if (containerRef.current) observer.observe(containerRef.current)

    return () => containerRef.current && observer.unobserve(containerRef.current)
  }, [containerRef.current, options])

  return (
    <>
      <div ref={containerRef}></div>
      <Header isVisibleFon={isVisibleFon} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/menu-bar" element={<MenuBar />} />
        <Route path="/menu" element={<MenuMain />} />
        <Route path="/menu-desserts" element={<MenuDesserts />} />
      </Routes>
      <Footer />
    </>
  )
}
