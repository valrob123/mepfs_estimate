import React, { useState } from 'react'
import { ExternalLink, Github, MapPin } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Northern Mindanao Medical Center Isolation Ward',
      category: 'Government Infrastructure',
      description: 'Lead site engineer for ADB-funded Construction of Negative Pressure Isolation Wards (Type 2) project. Managing multi-contractor coordination, progress monitoring, and ADB Environmental & Social compliance across biosafety laboratory construction.',
      technologies: ['ADB Standards', 'Multi-Agency Coordination', 'Progress Billing', 'Variation Orders'],
      link: '#',
      github: '#',
      image: 'project1',
      location: {
        name: 'Northern Mindanao Medical Center, Capitol Compound',
        city: 'Cagayan de Oro City',
        coordinates: { lat: 8.4542, lng: 124.6319 }
      }
    },
    {
      title: 'Mactan Sheraton Hotel - Complete Electrical System',
      category: 'Hospitality Engineering',
      description: 'Designed entire electrical infrastructure for 5-star luxury hotel including power distribution, LVSG single-line diagrams, riser diagrams, and building automation for 262 guest rooms. Zero commissioning defects achieved.',
      technologies: ['AutoCAD', 'Building Automation', 'Motor Control Panels', 'PEC 2017'],
      link: '#',
      github: '#',
      image: 'project2',
      location: {
        name: 'Mactan Sheraton Hotel',
        city: 'Lapu-lapu City, Cebu',
        coordinates: { lat: 10.3016, lng: 123.9613 }
      }
    },
    {
      title: 'SM Supermalls Commercial Construction',
      category: 'Commercial Development',
      description: 'Resident Engineer managing daily site operations for SM commercial mall construction. Achieved zero Lost-Time Injury record over 18 months through rigorous HSE enforcement and comprehensive quality control protocols.',
      technologies: ['Site Management', 'HSE Compliance', 'Contractor Coordination', 'Quality Control'],
      link: '#',
      github: '#',
      image: 'project3',
      location: {
        name: 'SM City Mandaue',
        city: 'Mandaue City, Cebu',
        coordinates: { lat: 10.3333, lng: 123.9333 }
      }
    },
    {
      title: 'PlanSwift 11 Electrical Estimation System',
      category: 'Software & Automation',
      description: 'Developed comprehensive PlanSwift 11 tutorial and automated DPWH-standard electrical cost estimate Excel workbook for NMMC project, streamlining DUPA workflows and PEC 2017 compliance documentation.',
      technologies: ['PlanSwift', 'Excel Automation', 'DPWH Standards', 'Cost Estimation'],
      link: '#',
      github: '#',
      image: 'project4',
      location: {
        name: 'DOH-CEREID Office',
        city: 'Cagayan de Oro City',
        coordinates: { lat: 8.4542, lng: 124.6319 }
      }
    },
    {
      title: 'Motor Control Panel Design - Sheraton Residences',
      category: 'Electrical Design',
      description: 'Designed and commissioned 3-phase and 1-phase motor control panels for kitchen exhaust and toilet exhaust systems at Sheraton Residences. Delivered with zero commissioning defects and full PEC compliance.',
      technologies: ['3-Phase Design', 'Motor Control', 'PEC 2017', 'Commissioning'],
      link: '#',
      github: '#',
      image: 'project5',
      location: {
        name: 'Sheraton Residences',
        city: 'Lapu-lapu City, Cebu',
        coordinates: { lat: 10.3016, lng: 123.9613 }
      }
    },
    {
      title: 'Building Automation Systems Implementation',
      category: 'Smart Systems',
      description: 'Completed building automation for 262 guest rooms at Mactan Sheraton Hotel including HVAC controls, lighting systems, and AV integration. Executed comprehensive Megger, Continuity, and Zoning Tests.',
      technologies: ['BAS', 'HVAC Controls', 'Testing & Commissioning', 'System Integration'],
      link: '#',
      github: '#',
      image: 'project6',
      location: {
        name: 'Mactan Sheraton Hotel',
        city: 'Lapu-lapu City, Cebu',
        coordinates: { lat: 10.3016, lng: 123.9613 }
      }
    }
  ]

  const handleLocationClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const openInGoogleMaps = (coordinates) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`, '_blank')
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Engineering Excellence in Action</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <span className="project-category-badge">{project.category}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <button 
                      onClick={() => handleLocationClick(project)}
                      className="project-link-btn"
                      aria-label="View location"
                      title="View on map"
                    >
                      <MapPin size={20} />
                    </button>
                    <a 
                      href={project.github} 
                      className="project-link-btn"
                      aria-label="View details"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-location-info">
                  <MapPin size={16} />
                  <span>{project.location.city}</span>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="map-modal" onClick={closeModal}>
          <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="map-modal-close" onClick={closeModal}>×</button>
            <div className="map-modal-header">
              <h3>{selectedProject.title}</h3>
              <p className="map-location-name">
                <MapPin size={18} />
                {selectedProject.location.name}, {selectedProject.location.city}
              </p>
            </div>
            <div className="map-container">
              <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${selectedProject.location.coordinates.lat},${selectedProject.location.coordinates.lng}&zoom=15`}>
              </iframe>
            </div>
            <div className="map-modal-footer">
              <button 
                className="btn-open-maps"
                onClick={() => openInGoogleMaps(selectedProject.location.coordinates)}
              >
                <MapPin size={18} />
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
