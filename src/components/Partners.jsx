import React from 'react'

// Partners section: display text-based logos with hover effects
export default function Partners() {
  return (
    <section className="partners">
      <h2>Our Partners</h2>
      <div className="partners-grid">
        <div className="partner-logo" title="Kongu Engineering College">
          <div className="partner-badge">Kongu Engineering College</div>
        </div>

        <div className="partner-logo" title="GUVI">
          <div className="partner-badge guvi-badge">GUVI</div>
        </div>
      </div>
    </section>
  )
}
