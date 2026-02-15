import { useState } from 'react'
import PropTypes from 'prop-types'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import './Contact.css'

const Contact = ({ email }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: false
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ submitting: true, submitted: false, error: false })

        try {
            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone || 'Not provided',
                    message: formData.message,
                    to_email: email
                },
                EMAILJS_CONFIG.PUBLIC_KEY
            )

            // Success
            setStatus({ submitting: false, submitted: true, error: false })
            setFormData({ name: '', email: '', phone: '', message: '' })

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus({ submitting: false, submitted: false, error: false })
            }, 5000)
        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus({ submitting: false, submitted: false, error: true })

            // Reset error message after 5 seconds
            setTimeout(() => {
                setStatus({ submitting: false, submitted: false, error: false })
            }, 5000)
        }
    }

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">CONTACT</h2>
                    <div className="contact-divider">
                        <span className="divider-line"></span>
                        <span className="divider-icon">✦</span>
                        <span className="divider-line"></span>
                    </div>
                    <p className="contact-intro">
                        Got a project in mind? Let's create something extraordinary together.
                        Whether it's a challenging problem to solve or an innovative idea to bring to life,
                        I'm always excited to collaborate and turn visions into reality.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="ENTER YOUR NAME*"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="ENTER YOUR EMAIL*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="PHONE NUMBER"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status.submitting}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="YOUR MESSAGE*"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}
                            className="form-textarea"
                            rows="6"
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status.submitting}
                    >
                        {status.submitting ? 'SENDING...' : 'SUBMIT'}
                    </button>

                    {status.submitted && (
                        <p className="status-message success">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </p>
                    )}

                    {status.error && (
                        <p className="status-message error">
                            ✗ Oops! Something went wrong. Please try again or email me directly at {email}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

Contact.propTypes = {
    email: PropTypes.string.isRequired
}

export default Contact
