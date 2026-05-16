import React from 'react'
import { Code2, Heart, Mail, Linkedin, Github } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' }
    ],
    resources: [
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
      { name: 'Resume', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, '#home')}>
                <div className="footer-logo-container">
                  <div className="footer-logo-icon">
                    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#gradient-footer)" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 10V22M10 16H22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="gradient-footer" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2C74B3"/>
                          <stop offset="1" stopColor="#144272"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="footer-logo-text">
                    <span className="footer-logo-title">RBV Engineering</span>
                  </div>
                </div>
              </a>
              <p className="footer-description">
                Licensed Electrical Engineer (REE/RME) specializing in electrical system design, 
                construction management, and infrastructure development. Delivering engineering 
                excellence through PEC 2017 compliance, rigorous quality control, and proven 
                multi-sector project execution.
              </p>
              <div className="footer-social">
                <a 
                  href="https://www.linkedin.com/in/robert-vallejos-461a2516b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/valrob123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:robertvallejos99@gmail.com" 
                  className="footer-social-link"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Quick Links</h4>
              <ul className="footer-links-list">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="footer-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Resources</h4>
              <ul className="footer-links-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="footer-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-links-title">Get In Touch</h4>
              <p className="footer-contact-text">
                Looking for an experienced electrical engineer for your project? 
                Let's discuss how I can contribute to your engineering success.
              </p>
              <a href="#contact" className="footer-cta" onClick={(e) => handleNavClick(e, '#contact')}>
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Engr. Robert B. Vallejos. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={16} className="heart-icon" /> using React + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
