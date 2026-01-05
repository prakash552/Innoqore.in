import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa'; // React Icons import kiya
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Dynamic Year for 2026

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/image/logo3.png" alt="Innoqore Rheges" className="footer-logo-img" />
                        </div>
                        <p className="footer-desc">
                            Empowering businesses through innovative technology and strategic insight.
                        </p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF className="social-icon-inner" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="social-icon-inner" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn className="social-icon-inner" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="social-icon-inner" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube className="social-icon-inner" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/partners">Partners</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/services">Digital Transformation</a></li>
                            <li><a href="/services">Strategic Consulting</a></li>
                            <li><a href="/services">UX Design</a></li>
                            <li><a href="/services">App Development</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Stay Updated</h4>
                        <p className="newsletter-text">Subscribe to get latest updates.</p>
                        <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {currentYear} Innoqore Rheges. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/cookies">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}