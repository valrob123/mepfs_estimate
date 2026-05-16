import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, submitting: true, error: false })

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: false })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, submitting: false, error: false })
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'robertvallejos99@gmail.com',
      link: 'mailto:robertvallejos99@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+63 995 842 8514',
      link: 'tel:+639958428514'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Lapu-lapu City, Cebu, Philippines',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's Discuss Your Engineering Needs</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-slideInLeft">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Open to engineering consultations, project collaborations, and professional opportunities. 
              Feel free to reach out for electrical system design, construction management, or 
              technical advisory services.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  className="contact-detail-item"
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <a 
                href="https://www.linkedin.com/in/robert-vallejos-461a2516b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/valrob123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <form className="contact-form animate-slideInRight" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {formStatus.submitted && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {formStatus.error && (
              <div className="form-error">
                Something went wrong. Please try again.
              </div>
            )}

            <button 
              type="submit" 
              className="form-submit"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
