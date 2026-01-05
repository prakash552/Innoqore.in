import React, { useState, useEffect } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    useEffect(() => {
        const video = document.getElementById('hero-video')
        if (video) {
            video.addEventListener('loadeddata', () => setIsVideoLoaded(true))
            video.addEventListener('error', () => setIsVideoLoaded(false))
        }
    }, [])

    return (
        <section className="hero">
            <video 
                id="hero-video"
                className="hero-video"
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src="/video/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className={`hero-overlay ${isVideoLoaded ? 'loaded' : ''}`}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Innovating for a Connected Tomorrow</h1>
                        <p>
                            Innoqore Rheges delivers cutting-edge solutions that empower businesses to thrive in the digital age. 
                            We bridge the gap between complex technology and human potential.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary"><Link to="/contact">Get Started</Link></button>
                            <button className="btn-secondary"><Link to="/about">Learn More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
