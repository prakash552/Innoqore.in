import React, { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/ServicesPage.css'

export default function ServicesPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const sliderRef = useRef(null);

    const services = [
        {
            icon: "🔧",
            title: "Custom Development",
            description: "Bespoke software solutions tailored to your specific requirements"
        },
        {
            icon: "🛡️",
            title: "Cybersecurity",
            description: "Comprehensive security solutions to protect your digital assets"
        },
        {
            icon: "📱",
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android"
        },
        {
            icon: "🤖",
            title: "AI & Machine Learning",
            description: "Leverage artificial intelligence to transform your business processes"
        },
        {
            icon: "📈",
            title: "Data Analytics",
            description: "Transform data into actionable insights with advanced analytics"
        },
        {
            icon: "🌐",
            title: "Web Development",
            description: "Modern, responsive web applications built with cutting-edge technologies"
        }
    ];

    const itemsPerSlide = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    const totalSlides = Math.ceil(services.length / itemsPerSlide);

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - translateX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        const threshold = 50;
        if (Math.abs(translateX) > threshold) {
            if (translateX > 0 && currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            } else if (translateX < 0 && currentSlide < totalSlides - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
        setTranslateX(0);
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setCurrentSlide(0);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="services-page">
            <Header />
            
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <h1>Our Services</h1>
                        <p>
                            We provide comprehensive solutions tailored to your unique business needs, 
                            combining strategy with technical excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="additional-services">
                <div className="container">
                    <div className="section-header">
                        <h2>Additional Services</h2>
                        <p>Explore our full range of specialized solutions</p>
                    </div>
                    
                    <div className="slider-container">
                        <div className="slider-wrapper">
                            <button 
                                className="slider-nav-btn prev-btn" 
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                            >
                                ‹
                            </button>
                            
                            <div 
                                className="additional-services-slider"
                                ref={sliderRef}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                style={{
                                    transform: `translateX(${-currentSlide * 100 + (translateX / window.innerWidth) * 100}%)`,
                                    transition: isDragging ? 'none' : 'transform 0.3s ease'
                                }}
                            >
                                {services.map((service, index) => (
                                    <div key={index} className="service-card">
                                        <div className="service-icon">{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                className="slider-nav-btn next-btn" 
                                onClick={nextSlide}
                                disabled={currentSlide === totalSlides - 1}
                            >
                                ›
                            </button>
                        </div>
                        
                        <div className="slider-dots">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Process</h2>
                        <p>How we deliver exceptional results for our clients</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Discovery</h3>
                            <p>We begin by understanding your business goals, challenges, and requirements through comprehensive analysis.</p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Strategy</h3>
                            <p>Our team develops a detailed roadmap and strategy tailored to your specific needs and objectives.</p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Implementation</h3>
                            <p>We execute the plan with precision, using agile methodologies to ensure flexibility and quality.</p>
                        </div>

                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Optimization</h3>
                            <p>Continuous monitoring and improvement to ensure optimal performance and ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Industries We Serve</h2>
                        <p>Extensive experience across multiple sectors</p>
                    </div>
                    <div className="industries-grid">
                        <div className="industry-card">
                            <div className="industry-icon">🏥</div>
                            <h3>Healthcare</h3>
                            <p>Digital health solutions and medical technology innovations</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">💰</div>
                            <h3>Finance</h3>
                            <p>Secure fintech solutions and banking technology platforms</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🛒</div>
                            <h3>Retail</h3>
                            <p>E-commerce platforms and customer experience solutions</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🏭</div>
                            <h3>Manufacturing</h3>
                            <p>IoT solutions and smart manufacturing systems</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🎓</div>
                            <h3>Education</h3>
                            <p>E-learning platforms and educational technology</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🚗</div>
                            <h3>Automotive</h3>
                            <p>Connected car solutions and automotive software</p>
                        </div>
                    </div>
                </div>
            </section>
			
            <Footer />
        </div>
    )
}
