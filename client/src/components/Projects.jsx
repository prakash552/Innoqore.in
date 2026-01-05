import React, { useState, useEffect } from 'react'
import './Projects.css'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [hoveredProject, setHoveredProject] = useState(null)
    const [visibleProjects, setVisibleProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const projects = [
        {
            id: 1,
            title: 'GYM Website',
            category: 'web',
            image: '../image/gym.png',
            description: 'Modern Gym website with responsive design',
            technologies: ['React', 'Node.js', 'MongoDB'],
            features: ['Real-time inventory', 'AI recommendations', 'Multi-payment'],
            link: 'https://my-gym-adm1.onrender.com',
          
            status: 'completed',
            client: 'TechMart Solutions',
            duration: '6 months'
        },
        {
            id: 2,
            title: 'RealEstate',
            category: 'web',
            image: '../image/realestate.png',
            description: 'Real Estate website with responsive design',
            technologies: ['Node.js', 'React.js', 'Mongo DB'],
            features: ['Real-time inventory', 'AI recommendations', 'Multi-contact'],
            link: 'https://realstate-yowr.onrender.com/',
            github: '#',
            status: 'completed',
            client: 'Aman',
            duration: '8 months'
        },
        {
            id: 3,
            title: 'TeamIndia',
            category: 'mobile',
            image: '/image/smarthome.jpg',
            description: 'Mobile app for smart home device control.',
            technologies: ['React Native', 'Firebase', 'MQTT'],
            features: ['Voice control', 'Automation rules', 'Energy monitoring'],
            link: '#',
            github: '#',
            status: 'in-progress',
            client: 'HomeTech Innovations',
            duration: '4 months'
        },
       
    ]

    const categories = [
        { id: 'all', name: 'All Projects', icon: '🎯' },
        { id: 'web', name: 'Web', icon: '🌐' },
        { id: 'mobile', name: 'Mobile', icon: '📱' }
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleProjects(projects.map((_, index) => index))
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter)

    const handleFilterChange = (filterId) => {
        setIsLoading(true)
        setVisibleProjects([])
        setTimeout(() => {
            setActiveFilter(filterId)
            setVisibleProjects(filteredProjects.map((_, index) => index))
            setIsLoading(false)
        }, 300)
    }

    return (
        <section className="projects-section">
            <div className="container">
                {/* Section Header */}
                <div className="projects-header">
                    <div className="header-badge">
                        <span className="badge-icon">🚀</span>
                        <span className="badge-text">Portfolio</span>
                    </div>
                    <h2 className="section-title">
                        <span className="title-gradient">Recent Projects</span>
                    </h2>
                    <p className="section-description">
                        Explore our latest work and innovative solutions
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                            onClick={() => handleFilterChange(category.id)}
                        >
                            <span className="tab-icon">{category.icon}</span>
                            <span className="tab-text">{category.name}</span>
                            <span className="tab-count">
                                {category.id === 'all' 
                                    ? projects.length 
                                    : projects.filter(p => p.category === category.id).length
                                }
                            </span>
                        </button>
                    ))}
                </div>

                {/* Loading Animation */}
                {isLoading && (
                    <div className="loading-animation">
                        <div className="loading-spinner"></div>
                    </div>
                )}

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${visibleProjects.includes(index) ? 'visible' : ''}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="project-image-container">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="project-status">
                                    <span className={`status-badge ${project.status}`}>
                                        {project.status === 'completed' ? '✅' : '🚧'}
                                    </span>
                                </div>
                                <div className="project-actions">
                                    <button 
                                        className="action-btn primary"
                                        onClick={() => window.open(project.link, '_blank')}
                                        title="View Live Project"
                                    >
                                        <span>🔗</span>
                                    </button>
                                
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                <div className="project-meta">
                                    <span className="project-category">
                                        {categories.find(c => c.id === project.category)?.icon}
                                    </span>
                                    <span className="project-duration">⏱️ {project.duration}</span>
                                </div>
                                
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                {/* Technologies */}
                                <div className="technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Details (shown on hover) */}
                                {hoveredProject === project.id && (
                                    <div className="project-details">
                                        <div className="detail-row">
                                            <span className="detail-label">👤 {project.client}</span>
                                        </div>
                                        <div className="detail-features">
                                            {project.features.slice(0, 2).map((feature, featureIndex) => (
                                                <span key={featureIndex} className="feature-tag">
                                                    ✨ {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

  <div className="swipe-indicator"></div>
                {/* Stats Section */}
                <div className="projects-stats">
                    <div className="stat-card">
                        <div className="stat-number">5+</div>
                        <div className="stat-label">Projects</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Satisfaction</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Technologies</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
