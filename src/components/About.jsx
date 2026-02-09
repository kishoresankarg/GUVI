import React from 'react'

// About section describing the DevOps training and tools covered
export default function About() {
  const tools = ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']

  return (
    <section className="about">
      <div className="about-card">
        <h2>About the Training</h2>
        <p>
          This DevOps Training Program is designed to equip students and professionals with practical
          skills on modern DevOps workflows. The program focuses on containerization, orchestration,
          cloud integration, and continuous delivery pipelines. Learn best practices from industry
          experts and work on real-world projects.
        </p>

        <h3 style={{ marginTop: 12 }}>Tools & Technologies</h3>
        <div className="tools-list">
          {tools.map((tool) => (
            <div className="tool-pill" key={tool}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
