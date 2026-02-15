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
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                        About me
                    </a>
                    <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                        Skills
                    </a>
                    <a target='_blank' href="https://drive.google.com/file/d/19dgOi6wRuiFHH3eHbbcYqhAv0BHXURik/view">
                        Resume
                    </a>
                    {/* <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>
                        Portfolio
                    </a> */}
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
