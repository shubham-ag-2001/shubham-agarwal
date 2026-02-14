import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SocialLinks from './SocialLinks'
import './Hero.css'

const Hero = ({ name, tagline, profileImage, socialLinks }) => {
    const greetings = ['Hi, I am', 'नमस्ते, I am']
    const [currentGreeting, setCurrentGreeting] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGreeting((prev) => (prev + 1) % greetings.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="hero-section">
            <div className="hero-left">
                <div className="hero-content">
                    <p className="greeting">{greetings[currentGreeting]}</p>
                    <h1 className="name">{name}</h1>
                    <p className="tagline">{tagline}</p>

                    <SocialLinks
                        email={socialLinks.email}
                        github={socialLinks.github}
                        linkedin={socialLinks.linkedin}
                    />
                </div>
            </div>

            <div
                className="hero-right"
                style={{ backgroundImage: `url(${profileImage})` }}
            >
                <div className="profile-image-wrapper">
                    {/* Image is now background */}
                </div>
            </div>
        </section>
    )
}

Hero.propTypes = {
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    socialLinks: PropTypes.shape({
        email: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired
    }).isRequired
}

export default Hero
