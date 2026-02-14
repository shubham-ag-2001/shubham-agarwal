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
    </div>
  )
}

export default App
