import React from 'react'
import { Link } from 'react-router-dom'

// Navigation bar with links to all pages
export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo-link">
          <div className="logo-badge">K</div>
          <div>
            <div className="nav-title">DevOps Training</div>
          </div>
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/training" onClick={() => setMenuOpen(false)}>
            Training
          </Link>
        </li>
        <li>
          <Link to="/partners" onClick={() => setMenuOpen(false)}>
            Partners
          </Link>
        </li>
        <li>
          <Link to="/register" className="cta-link" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  )
}
