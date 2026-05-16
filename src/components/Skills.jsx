import React from 'react'
import { Code, Database, Settings, Cpu, Globe, Shield } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Electrical Design & Drafting',
      skills: ['Single-Line Diagrams', 'Riser Diagrams', 'Motor Control Panels', 'Load Calculations', 'Voltage Drop Analysis']
    },
    {
      icon: <Database size={32} />,
      title: 'Testing & Commissioning',
      skills: ['Megger Testing', 'Continuity Testing', 'Zoning Tests', 'Building Automation Systems', 'Quality Control']
    },
    {
      icon: <Settings size={32} />,
      title: 'Engineering Software',
      skills: ['AutoCAD', 'Primavera P6', 'SketchUp', 'PlanSwift', 'MS Office Suite']
    },
    {
      icon: <Cpu size={32} />,
      title: 'Standards & Compliance',
      skills: ['PEC 2017', 'DPWH Standards', 'ADB Environmental Standards', 'HSE Compliance', 'Fire Protection Systems']
    },
    {
      icon: <Globe size={32} />,
      title: 'Project Management',
      skills: ['Site Supervision', 'Contractor Management', 'Progress Monitoring', 'RFI Resolution', 'Documentation']
    },
    {
      icon: <Shield size={32} />,
      title: 'Construction Management',
      skills: ['Quality Control', 'Risk Assessment', 'Variation Orders', 'Progress Billings', 'Certificate of Completion']
    }
  ]

  const technicalSkills = [
    { name: 'Electrical System Design', level: 95 },
    { name: 'Site Supervision & QC', level: 92 },
    { name: 'AutoCAD & Technical Drafting', level: 90 },
    { name: 'PEC 2017 Compliance', level: 94 },
    { name: 'Project Documentation', level: 93 },
    { name: 'Contractor Management', level: 88 }
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Expertise Across Multiple Engineering Domains</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-category-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="technical-proficiency">
          <h3 className="proficiency-title">Technical Proficiency</h3>
          <div className="proficiency-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="proficiency-item animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="proficiency-header">
                  <span className="proficiency-name">{skill.name}</span>
                  <span className="proficiency-percentage">{skill.level}%</span>
                </div>
                <div className="proficiency-bar">
                  <div 
                    className="proficiency-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
