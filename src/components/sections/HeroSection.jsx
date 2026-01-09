
const GITHUB_URL = 'https://github.com/coboinashadow/poly'

const contributors = [
  'coboinashadow',
  'mattiasgustavsson',
  'theselegadev'
]

export default function HeroSection() {
  return (
    <section id="main" className="pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">Poly — micro framework para games em C</h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">Leve, rápido e pensado para criar jogos em C. Baixe agora e experimente o fluxo de desenvolvimento otimizado para performance.</p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={`${GITHUB_URL}/archive/refs/heads/main.zip`}
                className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer download
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 dark:text-gray-200 hover:underline"
              >
                Ver no GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="w-48 h-48 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="120" height="120" rx="16" fill="#111827"/>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="48" fill="#ffffff" fontFamily="Inter, sans-serif">P</text>
              </svg>
            </div>

            <div className="mt-6 flex items-center -space-x-3">
              {contributors.map((login) => (
                <a key={login} href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={`https://avatars.githubusercontent.com/${login}?s=96&v=4`}
                    alt={login}
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 shadow-md"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
