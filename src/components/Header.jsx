import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { personalInfo } from '../data/constants'
import './Header.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMenuOpen])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        setIsMenuOpen(false)
        const element = document.getElementById(sectionId)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <div className="logo">
                    <div className="logo-icon">SA</div>
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                        About me
                    </a>
                    <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                        Skills
                    </a>
                    <a
                        target='_blank'
                        href={personalInfo.resume}
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Resume
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
