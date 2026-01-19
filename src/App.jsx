import './App.css'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import GuideSection from './components/sections/GuideSection'
import AboutSection from './components/sections/AboutSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Docs from './components/pages/Docs';

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/lp-poly" element={<><Header /><HeroSection /><GuideSection /><AboutSection /></>} />
          <Route path="/lp-poly/docs" element={<Docs />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
