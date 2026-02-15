import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa'
import { personalInfo } from '../data/constants'
import './Footer.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                    <FaChevronUp className="arrow-icon" />
                    <span className="back-to-top-text">BACK TO TOP</span>
                </button>

                <div className="footer-socials">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="footer-social-link"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>

                <p className="copyright">
                    &copy; {currentYear} {personalInfo.name} All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
