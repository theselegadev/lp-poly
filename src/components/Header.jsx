import {Github} from 'lucide-react'

const GITHUB_URL = 'https://github.com/coboinashadow/poly'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#main" className="text-xl font-semibold text-gray-900 dark:text-white">Poly</a>
            </div>

            <nav aria-label="Main navigation" className="flex items-center space-x-4">
              <a href="#main" className="text-gray-700 hover:text-gray-900 dark:text-gray-200">Início</a>
              <a href="#docs" className="text-gray-700 hover:text-gray-900 dark:text-gray-200">Documentação</a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center px-3 py-1.5 bg-black gap-2 text-white rounded-md hover:bg-gray-800"
              >
                <Github size={20}/>
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
