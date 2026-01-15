import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const polyFunctions = [
  { name: 'setcolor', signature: 'void setcolor(int color);', description: 'Define a cor para desenho' },
  { name: 'getcolor', signature: 'int getcolor();', description: 'Obtém a cor atual' },
  { name: 'putpixel', signature: 'void putpixel(int x,int y,int color);', description: 'Desenha um pixel na posição' },
  { name: 'line', signature: 'void line(int x1,int y1,int x2,int y2);', description: 'Desenha uma linha' },
  { name: 'rectangle', signature: 'void rectangle(int x,int y,int w,int h);', description: 'Desenha um retângulo' },
  { name: 'bar', signature: 'void bar(int x,int y,int w,int h);', description: 'Desenha um retângulo preenchido' },
  { name: 'circle', signature: 'void circle(int x,int y,int r);', description: 'Desenha um círculo' },
  { name: 'fillcircle', signature: 'void fillcircle(int x,int y,int r);', description: 'Desenha um círculo preenchido' },
  { name: 'ellipse', signature: 'void ellipse(int x,int y,int rx,int ry);', description: 'Desenha uma elipse' },
  { name: 'fillellipse', signature: 'void fillellipse(int x,int y,int rx,int ry);', description: 'Desenha uma elipse preenchida' },
  { name: 'drawpoly', signature: 'void drawpoly(int* points_xy,int count);', description: 'Desenha um polígono' },
  { name: 'fillpoly', signature: 'void fillpoly(int* points_xy,int count);', description: 'Desenha um polígono preenchido' },
  { name: 'floodfill', signature: 'void floodfill(int x,int y);', description: 'Preenchimento por inundação' },
  { name: 'boundaryfill', signature: 'void boundaryfill(int x,int y,int boundary);', description: 'Preenchimento por limite' },
  { name: 'blitInt', signature: 'void blitInt(int n,int x,int y);', description: 'Desenha um inteiro na tela' }
]

export default function DocumentationSection() {
  const [openSection, setOpenSection] = useState('compilar')

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section id="docs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Documentação</h2>
          <p className="mt-3 text-lg text-gray-600">Tudo o que você precisa para começar a criar games com Poly</p>
        </div>

        <div className="space-y-4">
          {/* Compilar Section */}
          <article className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleSection('compilar')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">Compilar</h3>
              <ChevronDown size={24} className={`text-gray-600 transition-transform ${openSection === 'compilar' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'compilar' && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="space-y-4 text-gray-700">
                  <p>Para gerar o arquivo executável (o jogo) basta executar o arquivo <code className="bg-gray-100 px-2 py-1 rounded">compila</code></p>
                  
                  <p>Esse arquivo envia o código-fonte do arquivo <code className="bg-gray-100 px-2 py-1 rounded">game.c</code> para o compilador <strong>tcc</strong> (Tiny C Compiler).</p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-semibold text-blue-900">💡 Aviso</p>
                    <p className="text-sm mt-2">No desenvolvimento de software é comum errar e tentar de novo. Caso haja algum erro no código, o <code className="bg-gray-100 px-2 py-1 rounded">compila</code> irá falhar.</p>
                  </div>

                  <p>As regras da linguagem C são muitas e são rígidas. O <code className="bg-gray-100 px-2 py-1 rounded">compila.bat</code> exibe uma descrição do erro (em inglês) caso o executável não possa ser gerado. Procurar na internet pela descrição do erro exibida é uma boa iniciativa.</p>
                </div>
              </div>
            )}
          </article>

          {/* Código Mínimo Section */}
          <article className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleSection('codigo')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">Código Mínimo (entrando no modo gráfico)</h3>
              <ChevronDown size={24} className={`text-gray-600 transition-transform ${openSection === 'codigo' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'codigo' && (
              <div className="px-6 py-4 border-t border-gray-200">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`#include "poly/poly.h"
main(){
  setvideomode();
  while(!keystate(KEY_ESCAPE)){
    waitvbl();
  }
}`}
                </pre>
              </div>
            )}
          </article>

          {/* Sobre Poly Section */}
          <article className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleSection('sobre')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">Sobre Poly</h3>
              <ChevronDown size={24} className={`text-gray-600 transition-transform ${openSection === 'sobre' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'sobre' && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="space-y-4 text-gray-700">
                  <p>Esse é um software resignadamente educacional e os jogos resultantes tem limitações. Bons softwares geralmente exploram alguns limites e esse é complacente.</p>

                  <p>O objetivo desse software é incentivar a comunidade brasileira de jogos. Esse software atua na divulgação do fato que <strong>escrever código é legal.</strong></p>
                </div>
              </div>
            )}
          </article>

          {/* Funções Poly Section */}
          <article className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleSection('funcoes')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">Funções Poly</h3>
              <ChevronDown size={24} className={`text-gray-600 transition-transform ${openSection === 'funcoes' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'funcoes' && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {polyFunctions.map((func) => (
                    <div key={func.name} className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="font-mono text-sm text-blue-600 break-words">{func.signature}</p>
                      <p className="text-sm text-gray-600 mt-2">{func.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  )
}
