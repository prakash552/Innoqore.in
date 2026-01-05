import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/ContactPage.css'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        helpType: '',
        message: '',
        agreeToPrivacy: false
    });

    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                helpType: '',
                message: '',
                agreeToPrivacy: false
            });
        }, 2000);
    };

    const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.message && formData.agreeToPrivacy;

    return (
        <div className="contact-page">
            <Header />
            
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-overlay"></div>
                <div className="hero-particles">
                    {[...Array(15)].map((_, i) => (
                        <div 
                            key={i}
                            className="hero-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${10 + Math.random() * 20}s`
                            }}
                        />
                    ))}
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">💎</span>
                            <span className="badge-text">Premium Support</span>
                        </div>
                        <h1>
                            <span className="hero-title-main">Connect With</span>
                            <span className="hero-title-sub">Our Experts</span>
                        </h1>
                        <p className="hero-description">
                            Transform your ideas into reality with our dedicated team of professionals. 
                            We're here to answer your questions and guide your journey to success.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support Available</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">&lt;1hr</span>
                                <span className="stat-label">Response Time</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="contact-info">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-subtitle">Multiple ways to connect with our team</p>
                    </div>
                    
                    <div className="contact-grid">
                        <div className="contact-left">
                            <div className="contact-cards">
                                <div className="contact-card">
                                    <div className="card-icon">
                                        <span className="icon-wrapper">📍</span>
                                    </div>
                                    <div className="card-content">
                                        <h3>Visit Our Office</h3>
                                        <p className="card-description">
                                            Experience our workspace and meet the team in person
                                        </p>
                                        <div className="contact-details">
                                            <p>Sector 44, Noida</p>
                                            <p>Uttar Pradesh, India</p>
                                        </div>
                                        <button className="card-btn">
                                            <span>🗺️</span>
                                            Get Directions
                                        </button>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon">
                                        <span className="icon-wrapper">📞</span>
                                    </div>
                                    <div className="card-content">
                                        <h3>Call Us Directly</h3>
                                        <p className="card-description">
                                            Speak with our experts during business hours
                                        </p>
                                        <div className="contact-details">
                                            <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                                            <a href="tel:+918743821921" className="contact-link">+91 8743821921</a>
                                            <a href="tel:+918591095483" className="contact-link">+91 8591095483</a>
                                        </div>
                                        <button className="card-btn">
                                            <span>📱</span>
                                            Call Now
                                        </button>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon">
                                        <span className="icon-wrapper">✉️</span>
                                    </div>
                                    <div className="card-content">
                                        <h3>Email Our Team</h3>
                                        <p className="card-description">
                                            Send us your queries and get a response within 24 hours
                                        </p>
                                        <div className="contact-details">
                                            <p>We respond to all inquiries promptly</p>
                                            <a href="mailto:innoqores@gmail.com" className="contact-link">
                                                innoqores@gmail.com
                                            </a>
                                        </div>
                                        <button className="card-btn">
                                            <span>📧</span>
                                            Send Email
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="map-section">
                                <h3>Find Us On Map</h3>
                                <div className="map-container">
                                    <div className="map-placeholder">
                                        <div className="map-pin">📍</div>
                                        <div className="map-text">Sector 44, Noida</div>
                                        <div className="map-overlay"></div>
                                    </div>
                                    <button className="map-btn">
                                        <span>🗺️</span>
                                        Open in Google Maps
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            <div className="contact-form-container">
                                <div className="form-header">
                                    <h2>Send Us a Message</h2>
                                    <p>Fill out the form below and our team will get back to you within 24 hours</p>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="firstName">
                                                <span className="label-icon">👤</span>
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">
                                                <span className="label-icon">👤</span>
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <span className="label-icon">📧</span>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="helpType">
                                            <span className="label-icon">🎯</span>
                                            How Can We Help?
                                        </label>
                                        <select
                                            id="helpType"
                                            name="helpType"
                                            value={formData.helpType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="mobile-app">Mobile App Development</option>
                                            <option value="consulting">Technical Consulting</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Business Partnership</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">
                                            <span className="label-icon">💬</span>
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project, requirements, or questions..."
                                            rows="6"
                                            required
                                        />
                                    </div>

                                    <div className="form-group checkbox-group">
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                id="agreeToPrivacy"
                                                name="agreeToPrivacy"
                                                checked={formData.agreeToPrivacy}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="checkbox-custom"></span>
                                            I agree to the{' '}
                                            <a href="/privacy" className="privacy-link">Privacy Policy</a>
                                            {' '}and{' '}
                                            <a href="/terms" className="privacy-link">Terms of Service</a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                        disabled={!isFormValid || isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                <span>🚀</span>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>

                                {formStatus === 'success' && (
                                    <div className="success-message">
                                        <span className="success-icon">✨</span>
                                        <div className="success-content">
                                            <h3>Message Sent Successfully!</h3>
                                            <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    )
}
