import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminDashboard.css'

export default function AdminDashboard() {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [adminData, setAdminData] = useState({
        name: 'Admin User',
        email: 'admin@innoqore.com',
        role: 'Super Admin',
        avatar: '👤'
    })
    const navigate = useNavigate()

    useEffect(() => {
        // Check if admin is logged in
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn')
        if (!isLoggedIn) {
            navigate('/admin/login')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn')
        navigate('/admin/login')
    }

    const handleEditProfile = () => {
        setShowProfileDropdown(false)
        // Navigate to edit profile page or open modal
        alert('Edit Profile functionality would open here')
    }

    const stats = [
        { label: 'Total Projects', value: '12', icon: '📊', color: '#667eea' },
        { label: 'Total Users', value: '1,248', icon: '👥', color: '#10b981' },
        { label: 'Revenue', value: '$45.2K', icon: '💰', color: '#f59e0b' },
        { label: 'Active Now', value: '89', icon: '🟢', color: '#ef4444' }
    ]

    const recentProjects = [
        { name: 'GYM Website', status: 'Completed', date: '2024-01-05', progress: 100 },
        { name: 'E-Commerce Platform', status: 'In Progress', date: '2024-01-03', progress: 75 },
        { name: 'Healthcare System', status: 'In Progress', date: '2024-01-01', progress: 60 },
        { name: 'Finance Dashboard', status: 'Planning', date: '2023-12-28', progress: 25 }
    ]

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <header className="admin-header">
                <div className="header-content">
                    <div className="header-left">
                        <h1>Admin Dashboard</h1>
                        <p>Manage your projects and settings</p>
                    </div>
                    
                    <div className="header-right">
                        <div className="profile-section">
                            <button 
                                className="profile-button"
                                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                            >
                                <div className="profile-avatar">
                                    <span>{adminData.avatar}</span>
                                </div>
                                <div className="profile-info">
                                    <span className="profile-name">{adminData.name}</span>
                                    <span className="profile-role">{adminData.role}</span>
                                </div>
                                <span className="dropdown-arrow">▼</span>
                            </button>

                            {/* Profile Dropdown */}
                            {showProfileDropdown && (
                                <div className="profile-dropdown">
                                    <div className="dropdown-header">
                                        <div className="dropdown-avatar">
                                            <span>{adminData.avatar}</span>
                                        </div>
                                        <div className="dropdown-info">
                                            <h4>{adminData.name}</h4>
                                            <p>{adminData.email}</p>
                                            <span className="role-badge">{adminData.role}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="dropdown-menu">
                                        <button 
                                            className="dropdown-item edit-profile"
                                            onClick={handleEditProfile}
                                        >
                                            <span>✏️</span>
                                            Edit Profile
                                        </button>
                                        <button 
                                            className="dropdown-item logout"
                                            onClick={handleLogout}
                                        >
                                            <span>🚪</span>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="admin-main">
                {/* Stats Grid */}
                <section className="stats-section">
                    <h2>Overview</h2>
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon" style={{ backgroundColor: stat.color + '20', color: stat.color }}>
                                    <span>{stat.icon}</span>
                                </div>
                                <div className="stat-content">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Projects */}
                <section className="projects-section">
                    <div className="section-header">
                        <h2>Recent Projects</h2>
                        <button className="view-all-btn">View All</button>
                    </div>
                    
                    <div className="projects-table">
                        <div className="table-header">
                            <div>Project Name</div>
                            <div>Status</div>
                            <div>Date</div>
                            <div>Progress</div>
                            <div>Actions</div>
                        </div>
                        
                        {recentProjects.map((project, index) => (
                            <div key={index} className="table-row">
                                <div className="project-name">
                                    <span>📁</span>
                                    {project.name}
                                </div>
                                <div className="project-status">
                                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="project-date">{project.date}</div>
                                <div className="project-progress">
                                    <div className="progress-bar">
                                        <div 
                                            className="progress-fill"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                    <span>{project.progress}%</span>
                                </div>
                                <div className="project-actions">
                                    <button className="action-btn">View</button>
                                    <button className="action-btn">Edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Actions */}
                <section className="quick-actions">
                    <h2>Quick Actions</h2>
                    <div className="actions-grid">
                        <button className="action-card">
                            <span>➕</span>
                            <h3>New Project</h3>
                            <p>Create a new project</p>
                        </button>
                        <button className="action-card">
                            <span>👥</span>
                            <h3>Manage Users</h3>
                            <p>View and edit users</p>
                        </button>
                        <button className="action-card">
                            <span>📊</span>
                            <h3>Analytics</h3>
                            <p>View detailed analytics</p>
                        </button>
                        <button className="action-card">
                            <span>⚙️</span>
                            <h3>Settings</h3>
                            <p>Configure settings</p>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}
