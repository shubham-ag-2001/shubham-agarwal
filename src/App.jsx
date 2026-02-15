import Header from './components/Header'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { personalInfo, aboutPreview } from './data/constants'
import { skillsData } from './data/skills'
import profileImage from './assets/shubham-side.jpg'
import './App.css'

function App() {
  const socialLinks = {
    email: personalInfo.email,
    github: personalInfo.github,
    linkedin: personalInfo.linkedin
  }

  return (
    <div className="app">
      <Header />

      <Hero
        name={personalInfo.name}
        tagline={personalInfo.tagline}
        profileImage={profileImage}
        socialLinks={socialLinks}
      />

      <AboutPreview
        title={aboutPreview.title}
        description={aboutPreview.description}
      />

      <Skills skillsData={skillsData} />

      {/* <section id="portfolio" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Portfolio Section</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Coming soon...</p>
        </div>
      </section> */}

      <Contact email={personalInfo.email} />

      <Footer />
    </div>
  )
}

export default App
