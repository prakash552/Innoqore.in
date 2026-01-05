import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true) 
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="logo">
                        <img src="/image/logo3.png" alt="Innoqore Rheges" className="logo-img" />
                    </Link>
                    <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <a href="/contact">Contact Us</a>
                        <Link to="/admin/login" className='contact-btn'>Admin Login</Link>
                    </nav>
                    <button 
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    )
}
