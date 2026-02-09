import React from 'react'

// Footer with college and GUVI credits and copyright
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Kongu Engineering College</strong> — In association with <strong>GUVI</strong>
      </div>
      <div style={{ marginTop: 6 }}>
        © {new Date().getFullYear()} Kongu Engineering College. All rights reserved.
      </div>
    </footer>
  )
}
