import { useState } from 'react';
import { Github, Menu, X, BookOpen } from 'lucide-react';

const GITHUB_URL = 'https://github.com/coboinashadow/poly'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="#main" className="text-xl font-semibold text-gray-900">Poly</a>
            </div>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
              <a href="#main" className="text-gray-700 hover:text-gray-900 transition-colors">Início</a>
              <a href="#guide" className="text-gray-700 hover:text-gray-900 transition-colors">Guia</a>
              <a 
                href="docs"
                target='_blank'
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                <BookOpen size={20} />
                Documentação
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <Github size={20}/>
                GitHub
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <nav className="md:hidden pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-3 pt-4">
                <a 
                  href="#main"
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-black/5 transition-colors"
                >
                  Início
                </a>
                <a 
                  href="#guide"
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-gray-900 px-2 py-2 rounded-lg hover:bg-black/5 transition-colors"
                >
                  Guia
                </a>
                <a 
                  href="docs"
                  target='_blank'
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-2 py-2 rounded-lg hover:bg-black/5 transition-colors duration-200"
                >
                  <BookOpen size={20} />
                  Documentação
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors w-fit"
                >
                  <Github size={20}/>
                  GitHub
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
