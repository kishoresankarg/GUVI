import React from 'react'
import { Link } from 'react-router-dom'

// Home / Landing page
export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-banner">
          <div className="banner-placeholder">
            <div className="banner-text">🎓 Welcome to DevOps Training</div>
          </div>
        </div>

        <div className="hero-cta">
          <h1>Accelerate your career in DevOps</h1>
          <p>
            Hands-on training covering essential DevOps tools and cloud practices. Practical labs,
            industry-aligned projects, and certification support.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link to="/register" className="register-btn">
              Register Now
            </Link>
          </div>

          <div className="highlights" style={{ marginTop: 20 }}>
            <div className="highlight-item">
              <span>Duration</span>
              <strong>8 weeks</strong>
            </div>
            <div className="highlight-item">
              <span>Mode</span>
              <strong>Online / Offline</strong>
            </div>
            <div className="highlight-item">
              <span>Certification</span>
              <strong>Yes</strong>
            </div>
            <div className="highlight-item">
              <span>Curriculum</span>
              <strong>Industry-oriented</strong>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="about-section">
        <div className="about-card">
          <h2>About the Program</h2>
          <p>
            This DevOps Training Program is designed to equip students and professionals with
            practical skills on modern DevOps workflows.
          </p>
          <Link to="/about" className="link-btn">
            Learn More →
          </Link>
        </div>
      </section>
    </div>
  )
}
