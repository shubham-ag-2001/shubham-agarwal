import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <div className="logo">
                    <div className="logo-icon">SA</div>
                </div>
                <nav className="nav">
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                        About me
                    </a>
                    <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                        Skills
                    </a>
                    <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="contact-btn"
                    >
                        Contact Me
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
