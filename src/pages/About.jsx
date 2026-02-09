import React from 'react'

// About page - detailed training description
export default function About() {
  const tools = ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>About the DevOps Training Program</h1>
        <p>Comprehensive hands-on training from industry experts</p>
      </div>

      <div className="about-card">
        <h2>Program Overview</h2>
        <p>
          This DevOps Training Program is designed to equip students and professionals with
          practical skills on modern DevOps workflows. The program focuses on containerization,
          orchestration, cloud integration, and continuous delivery pipelines.
        </p>
        <p>
          Learn best practices from industry experts and work on real-world projects that mirror
          production environments. Our curriculum bridges the gap between traditional operations
          and modern cloud-native development.
        </p>
      </div>

      <div className="about-card">
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>✓ Hands-on labs and practical assignments</li>
          <li>✓ Real-world project work</li>
          <li>✓ Industry-aligned curriculum</li>
          <li>✓ Certification upon completion</li>
          <li>✓ Mentorship from DevOps professionals</li>
          <li>✓ Job placement assistance</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Technologies Covered</h2>
        <div className="tools-list">
          {tools.map((tool) => (
            <div className="tool-pill" key={tool}>
              {tool}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 16 }}>
          And more! We cover containerization, orchestration, infrastructure as code, monitoring,
          logging, and CI/CD pipelines.
        </p>
      </div>

      <div className="about-card">
        <h2>Who Should Enroll?</h2>
        <ul className="features-list">
          <li>Software developers looking to transition to DevOps</li>
          <li>System administrators wanting to learn modern practices</li>
          <li>IT professionals seeking cloud skills</li>
          <li>Recent graduates eager to start their DevOps career</li>
          <li>Anyone passionate about automation and cloud technologies</li>
        </ul>
      </div>
    </section>
  )
}
