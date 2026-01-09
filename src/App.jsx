import './App.css'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import DocumentationSection from './components/sections/DocumentationSection'
import AboutSection from './components/sections/AboutSection'

function App() {

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <DocumentationSection />
        <AboutSection />
      </main>
    </>
  )
}

export default App
