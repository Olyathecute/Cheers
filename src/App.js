import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'

export default function App() {
  const containerRef = useRef(null)
  const [isVisibleFon, setIsVisibleFon] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) setIsVisibleFon(false)
    else setIsVisibleFon(true)
  }

  const options = {
    root: null,
    rootMargin: '30px',
    threshold: 1
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef.current, options])

  return (
    <>
      <div ref={containerRef}></div>
      <Header isVisibleFon={isVisibleFon} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  )
}
