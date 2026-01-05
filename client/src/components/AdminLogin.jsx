import React, { useState } from 'react'
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        // Simulate login validation
        setTimeout(() => {
            if (formData.email === 'admin@innoqore.com' && formData.password === 'admin123') {
                localStorage.setItem('isAdminLoggedIn', 'true')
                navigate('/admin/dashboard')
            } else {
                setError('Invalid email or password')
            }
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="admin-login-container">
            <div className="admin-login-wrapper">
                {/* Background Animation */}
                <div className="bg-animation">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>

                {/* Login Card */}
                <div className="admin-login-card">
                    <div className="login-header">
                        <div className="admin-icon">
                            <span>🔐</span>
                        </div>
                        <h2>Admin Login</h2>
                        <p>Access your admin dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">
                                <span>📧</span>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                autoFocus
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <span>🔑</span>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                <span>⚠️</span>
                                {error}
                            </div>
                        )}

                        {/* Test Button */}
                        <div className="test-section">
                            <p className="test-info">Current form data:</p>
                            <div className="test-display">
                                <span>Email: {formData.email || '(empty)'}</span>
                                <span>Password: {formData.password ? '***' : '(empty)'}</span>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className={`login-btn ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <div className="spinner"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <span>🚀</span>
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p className="footer-text">
                            Secure admin access portal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
