import Header from './components/Header'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import { personalInfo, aboutPreview } from './data/constants'
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

      {/* Placeholder sections - to be developed */}
      <section id="skills" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Skills Section</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Coming soon...</p>
        </div>
      </section>

      <section id="portfolio" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Portfolio Section</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Coming soon...</p>
        </div>
      </section>

      <section id="contact" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Section</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Coming soon...</p>
        </div>
      </section>
    </div>
  )
}

export default App
