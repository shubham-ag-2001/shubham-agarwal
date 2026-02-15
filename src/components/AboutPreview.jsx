import PropTypes from 'prop-types'
import { personalInfo } from '../data/constants'
import './AboutPreview.css'

const AboutPreview = ({ title, description, onReadMore }) => {
    return (
        <section id="about-preview" className="about-preview">
            <div className="about-preview-content">
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <button onClick={onReadMore} className="read-more-btn">
                    READ MORE
                </button>
            </div>
        </section>
    )
}

AboutPreview.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    onReadMore: PropTypes.func
}

AboutPreview.defaultProps = {
    onReadMore: () => {
        window.open(personalInfo.resume, '_blank', 'noopener,noreferrer')
    }
}

export default AboutPreview
