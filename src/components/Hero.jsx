import React from 'react'

// Hero section with large banner and CTA
export default function Hero() {
  const handleRegister = () => {
    alert('Registration form coming soon!')
  }

  return (
    <section className="hero">
      <div className="hero-banner">
        {/* Gradient banner placeholder */}
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
        <div style={{ marginTop: 12 }}>
          <button className="register-btn" onClick={handleRegister}>
            Register Now
          </button>
        </div>

        <div className="highlights" style={{ marginTop: 16 }}>
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
  )
}
