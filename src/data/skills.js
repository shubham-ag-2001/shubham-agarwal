import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaVuejs,
    FaGitAlt,
    FaPython,
    FaJava
} from 'react-icons/fa'
import {
    SiTypescript,
    SiMysql,
    SiDjango,
    SiCplusplus,
    SiC,
    SiSpringboot,
    SiMongodb
} from 'react-icons/si'
import { HiCube } from 'react-icons/hi'

// Skills Data with Real Icons
export const skillsData = {
    current: {
        title: 'USING NOW:',
        skills: [
            { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
            { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
            { name: 'React', Icon: FaReact, color: '#61DAFB' },
            { name: 'Vue', Icon: FaVuejs, color: '#4FC08D' },
            { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
            { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
            { name: 'Django', Icon: SiDjango, color: '#092E20' },
            { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
            { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
            // { name: 'C', Icon: SiC, color: '#A8B9CC' }
        ]
    },
    learning: {
        title: 'LEARNING:',
        skills: [
            { name: 'Java', Icon: FaJava, color: '#007396' },
            { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
            { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
            { name: 'System Design', Icon: HiCube, color: '#FF6B6B' }
        ]
    }
}
