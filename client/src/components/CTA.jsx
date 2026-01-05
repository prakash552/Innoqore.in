import React from 'react'
import './CTA.css'

export default function CTA() {
    return (
        <section className="cta">
            <div className="container">
                <h2>Ready to transform your business?</h2>
                <p>
                    Let's start the conversation and build something great together. 
                    Our team is ready to listen to your needs.
                </p>
                <div className="cta-buttons">
                    <button className="btn-primary">Contact Us</button>
                    <button className="btn-secondary">Schedule a Demo</button>
                </div>
            </div>
        </section>
    )
}
