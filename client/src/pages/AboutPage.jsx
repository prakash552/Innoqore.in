import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/AboutPage.css'

export default function AboutPage() {
    return (
        <div className="about-page">
            <Header />
            
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <div className="about-hero-text">
                            <h1>Building the Future of Industry</h1>
                            <p>
                                We are a dedicated team of innovators working together to empower businesses through technology and integrity. 
                               </p>
                            <div className="about-hero-buttons">
                                <button className="btn-primary">Join Our Team</button>
                                <button className="btn-secondary">Read Our Story</button>
                            </div>
                        </div>
                        <div className="about-hero-image">
                            <div className="team-image-placeholder"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Statistics */}
           <section class="company-stats">
    <div class="container">
        <div class="stats-slider-container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">2025</div>
                    <div class="stat-label">Founded In</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Employees</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Customers</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">1</div>
                    <div class="stat-label">Countries</div>
                </div>
            </div>
        </div>
    </div>
</section>


            {/* Mission & Values */}
            <section className="mission-values">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Mission & Values</h2>
                        <p>
                            Our mission is to empower organizations to achieve their full potential through sustainable innovation. 
                            We believe in building technology that serves humanity.
                        </p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🛡️</div>
                            <h3>Integrity</h3>
                            <p>
                                We uphold the highest standards of honesty and transparency in all our actions, 
                                building trust with every interaction.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>
                                We constantly seek new and better ways to solve problems, 
                                pushing the boundaries of what is possible.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Customer First</h3>
                            <p>
                                Our customers are at the heart of everything we do. 
                                We listen, understand, and deliver value that matters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="our-journey">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Journey</h2>
                        <p>From a small garage startup to a global enterprise.</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon">🧭</div>
                            <div className="timeline-content">
                                <h3>2025 Company Founded</h3>
                                <p>
                                    Innoqores was established in a small office with a vision to revolutionize 
                                    the industry software landscape.
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-icon">🌍</div>
                            <div className="timeline-content">
                                <h3>2020 Global Expansion</h3>
                                <p>
                                    We opened offices in London and Singapore to better serve our growing 
                                    international customer base.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon">🚀</div>
                            <div className="timeline-content">
                                <h3>2024 New Headquarters</h3>
                                <p>
                                    We moved into our sustainable, state-of-the-art headquarters, designed to foster 
                                    collaboration and community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <Footer />
        </div>
    )
}
