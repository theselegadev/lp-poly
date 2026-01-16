import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const polyFunctions = [
  { name: 'setcolor',
    signature: 'void setcolor(int color);',
    description: 'Define a cor que o jogo usará na próxima exibição (desenho)',
    example: 'setvideomode(); //inicia modo grafico\nwhile(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\tsetcolor(12); //define a cor vermelha\n\n\trectangle(30,70,50,70);\n\n\twaitvbl(); //processamentos da biblioteca poly\n}\nreturn 0;' },
  { name: 'getcolor',
    signature: 'int getcolor();',
    description: 'Armazena um número que representa a cor atual settada para próxima exibição (desenho)',
    example: 'setcolor(12); //define a cor vermelha\n\nint c=getcolor(); //armamena o valor da cor na variável c\nblitInt(c,50,50); //exibe o número na tela' },
  { name: 'putpixel',
    signature: 'void putpixel(int x,int y,int color);',
    description: 'Desenha na tela do jogo um pixel - da cor definida pelo terceiro argumento - na posição definida pelos parâmetros x e y.',
    example: 'setvideomode(); //inicia modo grafico\nwhile(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\tputpixel(100,100,1); //exibe o pixel azul (1) na posição 100,100\n\twaitvbl(); //processamentos da biblioteca poly\n}' },
  { name: 'line',
    signature: 'void line(int x1,int y1,int x2,int y2);',
    description: 'Essa função exibe na tela uma linha reta (na medida do possível) entre os pontos (1 e 2) definidos no trecho de código que a invoca.',
    example: 'while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\tsetcolor(73); //define a cor verde\n\n\tline(70,100,120,105); //exibe a linha da coordenada 70,100 até a coordenada 120,155\n\n\twaitvbl(); //processamentos da biblioteca poly\n}' },
  { name: 'rectangle',
    signature: 'void rectangle(int x,int y,int w,int h);',
    description: 'Os dois primeiros parametros dessa função são as coordenadas de um ponto do contorno de um retangulo a ser impresso na tela. Os outros dois são a largura e a altura.',
    example: 'while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\tsetcolor(73); //define a cor verde\n\n\trectangle(70,100,120,155); //exibe o contorno de um retângulo\n\n\twaitvbl(); //processamentos da biblioteca poly' },
  { name: 'bar',
    signature: 'void bar(int x,int y,int w,int h);',
    description: 'Essa função exibe um retângulo de dimensão w,h preenchido com a cor definida pela função setcolor.',
    example: 'int main(){\n\tsetvideomode(); //inicia modo grafico\n\twhile(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\t\tsetcolor(33); //define a cor verde\n\n\t\tbar(70,100,115,10); //exibe um retângulo\n\n\t\twaitvbl(); //processamentos da biblioteca poly\n\t}\n\treturn 0;\n}' },
  { name: 'circle',
    signature: 'void circle(int x,int y,int r);',
    description: 'Desenha um círculo na coordenada x,y. O raio do círculo exibido é definido pela variável r e a cor definida na função setcolor.',
    example: 'setvideomode();\nwhile(!keystate(KEY_ESCAPE)){\n    setcolor(14); //amarelo\n    circle(120,80,30); //centro (120,80) raio 30\n    waitvbl();\n}' },
  { name: 'fillcircle',
    signature: 'void fillcircle(int x,int y,int r);',
    description: 'Os dois primeiros parametros dessa função são as coordenadas do ponto central de um círculo preenchido na tela.',
    example: 'setvideomode();\nwhile(!keystate(KEY_ESCAPE)){\n    setcolor(4); //vermelho\n    fillcircle(80,60,25); //círculo preenchido centro (80,60) raio 25\n    waitvbl();\n}' },
  { name: 'ellipse',
    signature: 'void ellipse(int x,int y,int rx,int ry);',
    description: 'Essa função exibe o contorno de uma elipse cujos raios são definidos pelos parâmetros rx e ry.',
    example: 'setvideomode();\nwhile(!keystate(KEY_ESCAPE)){\n    setcolor(73); //verde\n    ellipse(140,100,40,20); //centro (140,100) rx=40 ry=20' },
  { name: 'fillellipse',
    signature: 'void fillellipse(int x,int y,int rx,int ry);',
    description: 'A elipse preenchida na tela do jogo tem o centro definido nos argumentos x,y da chamada da função.',
    example: 'while(!keystate(KEY_ESCAPE)){\n    setcolor(3); //cyan\n    fillellipse(200,80,30,15); //elipse preenchida centro (200,80) rx=30 ry=15\n    waitvbl();\n}' },
  { name: 'drawpoly',
    signature: 'void drawpoly(int* points_xy,int count);',
    description: 'O primeiro parâmetro dessa função é um array de inteiros que são coordenadas do polágono a ser contornado. O segundo é o número de vértices do polígono.',
    example: 'setcolor(11); //magenta/azulado\nint points[] = {\n\t60,60,  //vértice 1 (x1,y1)\n\t90,40,  //vértice 2 (x2,y2)\n\t120,60, //vértice 3 (x3,y3)\n\t110,90, //vértice 4 (x4,y4)\n\t70,95   //vértice 5 (x5,y5)\n};\ndrawpoly(points, 5); //5 vértices' },
  { name: 'fillpoly',
    signature: 'void fillpoly(int* points_xy,int count);',
    description: 'Usa-se essa função para mostrar na tela do jogo um polígno de múltipos vértices.',
    example: 'setvideomode();\nwhile(!keystate(KEY_ESCAPE)){\n    setcolor(9); //laranja\n    int poly[] = { 60,60, 90,40, 120,60, 110,90, 70,95 };\n    fillpoly(poly, 5); //preenche o polígono de 5 vértices\n    waitvbl();\n}' },
  { name: 'floodfill',
    signature: 'void floodfill(int x,int y);',
    description: 'Essa função preenche (com a cor definida na função setcolor) uma área da tela que é exibida ao jogador.',
    example: 'while(!keystate(KEY_ESCAPE)){\n    setcolor(15); //branco para contorno\n    rectangle(30,30,100,60); //desenha contorno de retângulo (largura=100, altura=60)\n    setcolor(2); //cor do preenchimento (verde)\n    floodfill(50,50); //ponto interior ao retângulo -> preenche o interior com a cor setada\n    waitvbl();\n}' },
  { name: 'boundaryfill',
    signature: 'void boundaryfill(int x,int y,int boundary);',
    description: 'Preenchimento por limite.',
    example: 'while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\tsetcolor(33);\n\trectangle(50,100,115,40); //contorno retângulo\n\n\tsetcolor(20); //define a cor\n\tboundaryfill(70,120,20); //preenchimento\n\n\twaitvbl(); //processamentos da biblioteca poly\n}' },
  { name: 'waitvbl',
    signature: 'void waitvbl(void);',
    description: 'Não sabemos exatamente a funcionalidade dessa função mas ela parece ser importante.',
    example: 'waitvbl();' },
  { name: 'blitInt',
    signature: 'void blitInt(int n,int x,int y);',
    description: 'Imprime um inteiro na tela.',
    example: 'setcolor(33);\n\nblitInt(87,100,90); //exibe o número na tela\n\nwaitvbl(); //processamentos da biblioteca poly' },
  { name: 'sleep',
    signature: 'void sleep(int m);',
    description: 'Pausa a sequencia de comandos que o dev escreveu por m milissegundos.',
    example: 'int x=72;\nwhile(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\tsetcolor(33);\n\n\tblitInt(x,100,90); //exibe o número na tela\n\n\tx=x+1;\n\tsleep(350); //pausa a sequencia de comandos que o dev escreveu por 350 milissegundos\n\n\twaitvbl(); //processamentos da biblioteca poly\n}' },
  { name: 'rand',
    signature: 'int rand(void);',
    description: 'Função usada para gerar números aleatórios.',
    example: 'int main(){\n\tsrand(time(0)); //semeia um numero aleatório\n\tint x;\n\tx=rand()%15; //um numero aleatorio entre o e 15\n\n\tsetvideomode(); //inicia modo grafico\n\twhile(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape\n\t\tsetcolor(33);\n\n\t\tblitInt(x,100,90); //exibe o número na tela\n\n\t\twaitvbl();\n\t}\n\treturn 0;\n}' }
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
                    <div key={func.name} className="p-4 rounded border border-gray-200">
                      <p className="font-mono text-sm text-blue-600 break-words">{func.signature}</p>
                      <p className="text-sm text-gray-600 mt-2">{func.description}</p>
                      <pre className="text-sm text-gray-600 mt-2 p-3 rounded border border-gray-200 bg-gray-50 overflow-scroll">{func.example}</pre>
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
