import React from 'react'

// Training page - detailed program highlights and structure
export default function Training() {
  const modules = [
    {
      title: 'Linux Fundamentals',
      description: 'Master Linux command line, file system, and user management'
    },
    {
      title: 'Docker & Containerization',
      description: 'Build, deploy, and manage Docker containers'
    },
    {
      title: 'Kubernetes Orchestration',
      description: 'Deploy and manage applications at scale with Kubernetes'
    },
    {
      title: 'AWS Cloud Services',
      description: 'Leverage AWS services for cloud deployments'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Automate build, test, and deployment processes'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure using Terraform and CloudFormation'
    },
    {
      title: 'Monitoring & Logging',
      description: 'Implement comprehensive monitoring and log aggregation'
    },
    {
      title: 'Capstone Project',
      description: 'Build an end-to-end DevOps solution'
    }
  ]

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Training Program Details</h1>
        <p>8-week intensive DevOps curriculum</p>
      </div>

      <div className="highlights-grid">
        <div className="highlight-card">
          <div className="highlight-icon">⏱️</div>
          <h3>Duration</h3>
          <p>8 weeks, part-time or full-time options</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">💻</div>
          <h3>Mode</h3>
          <p>Online and Offline classes available</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">📜</div>
          <h3>Certification</h3>
          <p>Industry-recognized certificate upon completion</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🏆</div>
          <h3>Placement</h3>
          <p>Job placement assistance for eligible candidates</p>
        </div>
      </div>

      <div className="about-card">
        <h2>Program Modules</h2>
        <div className="modules-grid">
          {modules.map((mod, idx) => (
            <div className="module-card" key={idx}>
              <div className="module-number">Week {idx + 1}</div>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-card">
        <h2>Learning Outcomes</h2>
        <ul className="features-list">
          <li>Deploy containerized applications using Docker</li>
          <li>Orchestrate containers at scale with Kubernetes</li>
          <li>Build automated CI/CD pipelines</li>
          <li>Provision and manage cloud infrastructure</li>
          <li>Monitor, log, and troubleshoot applications</li>
          <li>Implement infrastructure as code practices</li>
          <li>Handle real-world DevOps challenges</li>
        </ul>
      </div>
    </section>
  )
}
