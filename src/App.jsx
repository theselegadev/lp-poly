import './App.css'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import DocumentationSection from './components/sections/DocumentationSection'

function App() {

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <DocumentationSection />
      </main>
    </>
  )
}

export default App
