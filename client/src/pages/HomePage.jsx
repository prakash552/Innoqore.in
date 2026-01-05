import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import CorePrinciples from '../components/CorePrinciples'
import Projects from '../components/Projects'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/global.css'

export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
   
            <WhoWeAre />
            <CorePrinciples />
            <Projects />
            <CTA />
            <Footer />
            <ScrollToTop />
        </div>
    )
};