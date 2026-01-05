import React from 'react'
import './WhoWeAre.css'

export default function WhoWeAre() {
    return (
        <section className="who-we-are" id="about">
            <div className="container">
                <div className="who-we-are-content">
                    <div className="who-we-are-text">
                        <h2>WHO WE ARE</h2>
                        <h3>Bridging the gap between complex tech and human needs.</h3>
                        <p>
                            We are a team of passionate innovators dedicated to making technology relatable and effective. 
                            In a world of constant noise, we focus on clarity and purpose.
                        </p>
                        <div className="metrics">
                            <div className="metric">
                                <span className="metric-number">1+</span>
                                <span className="metric-label">Years Active</span>
                            </div>
                            <div className="metric">
                                <span className="metric-number">5+</span>
                                <span className="metric-label">Projects Done</span>
                            </div>
                        </div>
                        <div className="features">
                            <div className="feature">
                                <span className="check">✓</span>
                                <span>Reliable Tech</span>
                            </div>
                            <div className="feature">
                                <span className="check">✓</span>
                                <span>Collaborative Growth</span>
                            </div>
                        </div>
                        <a href="#" className="read-story">Read our full story</a>
                    </div>
                    <div className="who-we-are-image">
                        <div className="image-placeholder"><img src="/image/home1.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
