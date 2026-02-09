import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Training from './pages/Training'
import Partners from './pages/Partners'
import Register from './pages/Register'

// Main app with router for navigation between pages
export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
