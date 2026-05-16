import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Project Associate I (Engineer III)',
      company: 'Department of Health - CEREID',
      location: 'Northern Mindanao Medical Center, Cagayan de Oro',
      period: 'May 2025 - Present',
      description: 'Lead on-site monitoring of civil works for DOH isolation facilities and biosafety laboratories; enforce ADB Environmental, Social, and Gender & Development standards across all project sites.',
      achievements: [
        'Managing 3 simultaneous construction sites with multi-contractor coordination',
        'Process variation orders, progress billings, and Certificates of Completion across multi-agency projects',
        'Review Technical Specifications, Plans, and Detailed Estimates — reducing rework and variation costs',
        'Identify and escalate early-warning risks to Project Team Leader and DOH/ADB offices'
      ]
    },
    {
      title: 'Resident Engineer',
      company: 'SM Supermalls',
      location: 'Mandaue City, Cebu',
      period: 'November 2023 - May 2025',
      description: 'Managed daily site operations for SM commercial mall construction — contractor oversight, quality control, and schedule enforcement across all trades.',
      achievements: [
        'Maintained zero Lost-Time Injury record over 18 months through rigorous HSE enforcement',
        'Resolved design RFIs and contractor conflicts as primary liaison — zero escalations to board level',
        'Managed full site documentation pipeline: daily logs, progress reports, punch lists, turnover packages',
        'Coordinated between consultants, contractors, and SM ownership for seamless project delivery'
      ]
    },
    {
      title: 'Site Electrical Engineer',
      company: 'Venray Construction Corporation',
      location: 'Lapu-lapu City, Cebu',
      period: 'August 2020 - November 2023',
      description: 'Designed entire electrical system for the 5-star Mactan Sheraton Hotel — power distribution, lighting, LVSG single-line diagrams, and riser diagrams from schematic through IFC.',
      achievements: [
        'Designed 3-phase and 1-phase motor control panels for kitchen and toilet exhaust systems — zero commissioning defects',
        'Completed building automation for all 262 guest rooms (HVAC, lighting, AV) ahead of opening date',
        'Executed comprehensive Megger, Continuity, and Zoning Tests with full PEC 2017 compliance',
        'Delivered complete electrical infrastructure from design through commissioning for luxury hospitality project'
      ]
    },
    {
      title: 'Site Electrical Engineer',
      company: 'GGSE Construction',
      location: 'Lapu-lapu City, Cebu',
      period: 'March 2019 - August 2020',
      description: 'Supervised electrical installation, testing, and commissioning for multiple mid-rise residential and commercial projects in full PEC compliance.',
      achievements: [
        'Coordinated directly with architects, project managers, and main contractors',
        'Managed subcontractors and site workers to quality and safety standards',
        'Delivered multiple residential and commercial projects with zero safety incidents',
        'Established strong foundation in site supervision and electrical systems commissioning'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Career Journey & Achievements</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-fadeInUp" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-achievements">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
