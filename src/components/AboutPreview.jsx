import PropTypes from 'prop-types'
import { personalInfo } from '../data/constants'
import './AboutPreview.css'

const AboutPreview = ({ title, description }) => {
    return (
        <section id="about-preview" className="about-preview">
            <div className="about-preview-content">
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                >
                    READ MORE
                </a>
            </div>
        </section>
    )
}

AboutPreview.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AboutPreview
