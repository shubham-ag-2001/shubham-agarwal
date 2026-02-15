import PropTypes from 'prop-types'
import './Skills.css'

const Skills = ({ skillsData }) => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">SKILLS</h2>

                {/* Current Skills */}
                <div className="skills-category">
                    <h3 className="category-title">{skillsData.current.title}</h3>
                    <div className="skills-grid">
                        {skillsData.current.skills.map((skill, index) => {
                            const IconComponent = skill.Icon
                            return (
                                <div
                                    key={index}
                                    className="skill-card"
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <div className="skill-icon">
                                        <IconComponent />
                                    </div>
                                    <div className="skill-name">{skill.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Learning Skills */}
                <div className="skills-category">
                    <h3 className="category-title">{skillsData.learning.title}</h3>
                    <div className="skills-grid">
                        {skillsData.learning.skills.map((skill, index) => {
                            const IconComponent = skill.Icon
                            return (
                                <div
                                    key={index}
                                    className="skill-card learning"
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <div className="skill-icon">
                                        <IconComponent />
                                    </div>
                                    <div className="skill-name">{skill.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

Skills.propTypes = {
    skillsData: PropTypes.shape({
        current: PropTypes.shape({
            title: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    Icon: PropTypes.elementType.isRequired,
                    color: PropTypes.string.isRequired
                })
            ).isRequired
        }).isRequired,
        learning: PropTypes.shape({
            title: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    Icon: PropTypes.elementType.isRequired,
                    color: PropTypes.string.isRequired
                })
            ).isRequired
        }).isRequired
    }).isRequired
}

export default Skills
