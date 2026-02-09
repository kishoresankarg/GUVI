import React from 'react'

// Header shows text-based logos and the title/subtitle with register CTA
export default function Header() {
  const handleRegister = () => {
    alert('Registration form coming soon!')
  }

  return (
    <header className="site-header">
      <div className="brand">
        {/* Text-based logo badge for Kongu */}
        <div className="logo-badge">K</div>
        <div>
          <div className="title">DevOps Training Program</div>
          <div className="subtitle">Organized by Kongu Engineering College in association with GUVI</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Text-based logo badge for GUVI */}
        <div className="logo-badge guvi-badge">GUVI</div>
        <button className="register-btn" onClick={handleRegister}>
          Register Now
        </button>
      </div>
    </header>
  )
}
