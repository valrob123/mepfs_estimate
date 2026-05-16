import React from 'react'
import { ArrowDown, Mail, Linkedin, Github, FileText, Code2 } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const handleScrollToAbout = (e) => {
    e.preventDefault()
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-image animate-fadeIn">
          <div className="image-placeholder">
            <img 
              src="/images/profile.png" 
              alt="Engr. Robert B. Vallejos - Registered Electrical Engineer"
              className="profile-image"
            />
          </div>
        </div>

        <div className="hero-content animate-fadeInUp">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="hero-name">Engr. Robert B. Vallejos</span>
            <span className="hero-cursor">_</span>
          </h1>
          <h2 className="hero-subtitle">Registered Electrical Engineer (REE/RME)</h2>
          <p className="hero-description">
            Site & Project Engineer with 7+ years of experience in electrical system design, 
            construction management, and infrastructure development. Currently serving as Project 
            Associate I at DOH-CEREID, specializing in biosafety laboratories, isolation facilities, 
            and multi-agency construction oversight with ADB Environmental & Social standards compliance.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              <FileText size={20} />
              View Projects
            </a>
          </div>

          <div className="hero-social">
            <a 
              href="https://www.linkedin.com/in/robert-vallejos-461a2516b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/valrob123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" onClick={handleScrollToAbout}>
        <span>Scroll Down</span>
        <ArrowDown size={20} className="scroll-icon" />
      </a>
    </section>
  )
}

export default Hero
