import React from 'react'

// Partners page - display partner organizations
export default function Partners() {
  const partners = [
    {
      name: 'Kongu Engineering College',
      description: 'Premier institution delivering quality engineering education since 1981'
    },
    {
      name: 'GUVI',
      description: 'Leading EdTech platform providing industry-relevant skill training'
    }
  ]

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Our Partners</h1>
        <p>Building excellence together</p>
      </div>

      <div className="partners-container">
        {partners.map((partner, idx) => (
          <div className="partner-card" key={idx}>
            <div className="partner-badge-large">
              {partner.name === 'Kongu Engineering College' ? 'KONGU' : 'GUVI'}
            </div>
            <h2>{partner.name}</h2>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>

      <div className="about-card">
        <h2>Why These Partners?</h2>
        <p>
          Kongu Engineering College and GUVI have partnered to bring world-class DevOps training
          to students and professionals. This collaboration combines:
        </p>
        <ul className="features-list">
          <li>Academic rigor and theoretical foundation</li>
          <li>Industry experience and practical expertise</li>
          <li>Cutting-edge curriculum and hands-on labs</li>
          <li>Career support and placement opportunities</li>
          <li>Certified instructors and mentors</li>
          <li>Access to latest tools and technologies</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Together, We Deliver</h2>
        <p>
          This training program is a result of years of experience in education and industry.
          We're committed to preparing the next generation of DevOps professionals with skills
          that matter in today's fast-paced technology landscape.
        </p>
      </div>
    </section>
  )
}
