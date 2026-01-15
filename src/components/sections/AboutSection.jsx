
const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Feito pela comunidade, para a comunidade
          </h2>
          <p className="text-xl text-gray-700 mb-7">
            Projeto da comunidade, feito para a comunidade — incentivamos fortemente o aprendizado em programação porque é simplesmente algo muito legal.
          </p>
          <p className="text-md text-gray-800 mb-6">
            Projeto iniciado por <span className="text-blue-600">Rodrigo Schio</span>, desenvolvedor principal, com a colaboração de Matheus Seleghin, que desenvolveu a página e Mathias que contribui em c com o projeto.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={`https://github.com/coboinashadow/poly/archive/refs/heads/main.zip`}
                className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
            >
              Faça o download!
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection