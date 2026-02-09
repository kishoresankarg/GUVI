import React, { useState } from 'react'

// Register page - registration form
export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
    mode: 'online'
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send data to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', background: '', mode: 'online' })
    }, 3000)
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <h1>Register Now</h1>
        <p>Join the DevOps Training Program</p>
      </div>

      {submitted && (
        <div className="success-message">
          ✓ Thank you! We'll contact you soon with more details.
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="form-group">
            <label htmlFor="background">Professional Background *</label>
            <select
              id="background"
              name="background"
              value={formData.background}
              onChange={handleChange}
              required
            >
              <option value="">Select your background</option>
              <option value="developer">Software Developer</option>
              <option value="admin">System Administrator</option>
              <option value="engineer">IT Engineer</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mode">Preferred Mode *</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  checked={formData.mode === 'online'}
                  onChange={handleChange}
                />
                Online
              </label>
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="offline"
                  checked={formData.mode === 'offline'}
                  onChange={handleChange}
                />
                Offline
              </label>
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="hybrid"
                  checked={formData.mode === 'hybrid'}
                  onChange={handleChange}
                />
                Hybrid
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Register Now
          </button>
        </form>
      </div>

      <div className="about-card">
        <h2>Next Steps</h2>
        <ol className="features-list">
          <li>Fill out the registration form above</li>
          <li>We'll review your application</li>
          <li>Receive confirmation email with details</li>
          <li>Complete pre-training assessment (if required)</li>
          <li>Start your DevOps journey!</li>
        </ol>
      </div>
    </section>
  )
}
