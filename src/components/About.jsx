import React from 'react'
import { Award, Target, Zap } from 'lucide-react'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <Award size={32} />,
      title: 'Dual Licensed Professional',
      description: 'Registered Electrical Engineer (REE #0073054) and Registered Master Electrician (RME #0060494) with PRC certification and continuous professional development.'
    },
    {
      icon: <Target size={32} />,
      title: 'Multi-Sector Expertise',
      description: 'Proven track record across government infrastructure (DOH-CEREID), commercial development (SM Supermalls), and luxury hospitality (Mactan Sheraton Hotel).'
    },
    {
      icon: <Zap size={32} />,
      title: 'Zero-Defect Delivery',
      description: 'Maintained zero Lost-Time Injury record for 18 months and zero commissioning defects through rigorous quality control and PEC 2017 compliance.'
    }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Professional Engineer Committed to Excellence</p>
        </div>

        <div className="about-content">
          <div className="about-text animate-slideInLeft">
            <h3 className="about-heading">Building Infrastructure Excellence Through Engineering</h3>
            <p className="about-paragraph">
              With over 7 years of progressive experience in electrical engineering and construction 
              management, I specialize in delivering complex infrastructure projects from design through 
              commissioning. My expertise spans electrical system design, PEC 2017 compliance, building 
              automation, and multi-stakeholder project coordination across government and private sectors.
            </p>
            <p className="about-paragraph">
              Currently serving as Project Associate I at the Department of Health - Civil Engineering 
              and Related Infrastructure Division (DOH-CEREID), I lead on-site monitoring of biosafety 
              laboratories and isolation facilities at Northern Mindanao Medical Center, enforcing ADB 
              Environmental, Social, and Gender & Development standards while managing multiple contractors 
              and keeping simultaneous construction sites on schedule.
            </p>
            <p className="about-paragraph">
              My engineering portfolio includes the complete electrical design for the 5-star Mactan 
              Sheraton Hotel, motor control systems, building automation for 262 guest rooms, and 
              comprehensive testing and commissioning. I bring a proven track record of zero Lost-Time 
              Injuries, zero commissioning defects, and consistent on-time project delivery through 
              rigorous quality control, HSE enforcement, and technical excellence.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Safety Record</div>
              </div>
            </div>
          </div>

          <div className="about-highlights animate-slideInRight">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{highlight.icon}</div>
                <div className="highlight-content">
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
