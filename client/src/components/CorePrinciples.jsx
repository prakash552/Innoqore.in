import React from 'react'
import './CorePrinciples.css'

export default function CorePrinciples() {
    return (
        <section className="core-principles">
            <div className="container">
                <div className="section-header">
                    <h2>Core Principles</h2>
                    <p>The foundation upon which we build every solution.</p>
                </div>
                <div className="principles-grid">
                    <div className="principle-card">
                        <div className="principle-icon">✓</div>
                        <h3>Integrity</h3>
                        <p>We operate with transparency and honesty in all our client relationships and business practices.</p>
                    </div>
                    <div className="principle-card">
                        <div className="principle-icon">💡</div>
                        <h3>Innovation</h3>
                        <p>We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.</p>
                    </div>
                    <div className="principle-card">
                        <div className="principle-icon">👥</div>
                        <h3>Community</h3>
                        <p>We believe in building strong relationships and fostering collaboration within and beyond our team.</p>
                    </div>
                    <div className="principle-card">
                        <div className="principle-icon">⚡</div>
                        <h3>Agility</h3>
                        <p>We adapt quickly to changing needs and deliver results with speed and precision.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
