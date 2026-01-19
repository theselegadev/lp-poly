import { useState } from 'react';
import { ChevronDown, Download, Code } from 'lucide-react';

const Docs = () => {
  const [selectedFunction, setSelectedFunction] = useState('setcolor');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const functions = [
    {
      id: 'setcolor',
      name: 'setcolor',
      signature: 'void setcolor(int color);',
      description: 'Define a cor que o jogo usará na próxima exibição (desenho)',
      example: `setvideomode(); //inicia modo grafico
while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
	setcolor(12); //define a cor vermelha

	rectangle(30,70,50,70);

	waitvbl(); //processamentos da biblioteca poly
}
return 0;`
    },
    {
      id: 'getcolor',
      name: 'getcolor',
      signature: 'int getcolor();',
      description: 'Armazena um número que representa a cor atual settada para próxima exibição (desenho)',
      example: `setcolor(12); //define a cor vermelha

int c=getcolor(); //armamena o valor da cor na variável c
blitInt(c,50,50); //exibe o número na tela`
    },
    {
      id: 'putpixel',
      name: 'putpixel',
      signature: 'void putpixel(int x,int y,int color);',
      description: 'Desenha na tela do jogo um pixel - da cor definida pelo terceiro argumento - na posição definida pelos parâmetros x e y',
      example: `setvideomode(); //inicia modo grafico
while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
	putpixel(100,100,1); //exibe o pixel azul (1) na posição 100,100
	waitvbl(); //processamentos da biblioteca poly
}`
    },
    {
      id: 'line',
      name: 'line',
      signature: 'void line(int x1,int y1,int x2,int y2);',
      description: 'Essa função exibe na tela uma linha reta (na medida do possível) entre os pontos (1 e 2) definidos no trecho de código que a invoca.',
      example: `while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
	setcolor(73); //define a cor verde

	line(70,100,120,105); //exibe a linha da coordenada 70,100 até a coordenada 120,155

	waitvbl(); //processamentos da biblioteca poly
}`
    },
    {
      id: 'rectangle',
      name: 'rectangle',
      signature: 'void rectangle(int x,int y,int w,int h);',
      description: 'Os dois primeiros parametros dessa função são as coordenadas de um ponto do contorno de um retangulo a ser impresso na tela. Os outros dois são a largura e a altura.',
      example: `while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
	setcolor(73); //define a cor verde

	rectangle(70,100,120,155); //exibe o contorno de um retângulo

	waitvbl(); //processamentos da biblioteca poly
}`
    },
    {
      id: 'bar',
      name: 'bar',
      signature: 'void bar(int x,int y,int w,int h);',
      description: 'Essa função exibe um retângulo de dimensão w,h preenchido com a cor definida pela função setcolor.',
      example: `int main(){
	setvideomode(); //inicia modo grafico
	while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
		setcolor(33); //define a cor verde

		bar(70,100,115,10); //exibe um retângulo

		waitvbl(); //processamentos da biblioteca poly
	}
	return 0;
}`
    },
    {
      id: 'circle',
      name: 'circle',
      signature: 'void circle(int x,int y,int r);',
      description: 'Desenha um círculo na coordenada x,y. O raio do círculo exibido é definido pela variável r e a cor definida na função setcolor.',
      example: `setvideomode();
while(!keystate(KEY_ESCAPE)){
    setcolor(14); //amarelo
    circle(120,80,30); //centro (120,80) raio 30
    waitvbl();
}`
    },
    {
      id: 'fillcircle',
      name: 'fillcircle',
      signature: 'void fillcircle(int x,int y,int r);',
      description: 'Os dois primeiros parametros dessa função são as coordenadas do ponto central de um círculo preenchido na tela.',
      example: `setvideomode();
while(!keystate(KEY_ESCAPE)){
    setcolor(4); //vermelho
    fillcircle(80,60,25); //círculo preenchido centro (80,60) raio 25
    waitvbl();
}`
    },
    {
      id: 'ellipse',
      name: 'ellipse',
      signature: 'void ellipse(int x,int y,int rx,int ry);',
      description: 'Essa função exibe o contorno de uma elipse cujos raios são definidos pelos parâmetros rx e ry.',
      example: `setvideomode();
while(!keystate(KEY_ESCAPE)){
    setcolor(73); //verde
    ellipse(140,100,40,20); //centro (140,100) rx=40 ry=20
    waitvbl();
}`
    },
    {
      id: 'fillellipse',
      name: 'fillellipse',
      signature: 'void fillellipse(int x,int y,int rx,int ry);',
      description: 'A elipse preenchida na tela do jogo tem o centro definido nos argumentos x,y da chamada da função.',
      example: `while(!keystate(KEY_ESCAPE)){
    setcolor(3); //cyan
    fillellipse(200,80,30,15); //elipse preenchida centro (200,80) rx=30 ry=15
    waitvbl();
}`
    },
    {
      id: 'drawpoly',
      name: 'drawpoly',
      signature: 'void drawpoly(int* points_xy,int count);',
      description: 'O primeiro parâmetro dessa função é um array de inteiros que são coordenadas do polágono a ser contornado. O segundo é o número de vértices do polígono.',
      example: `setcolor(11); //magenta/azulado
int points[] = {
	60,60,  //vértice 1 (x1,y1)
	90,40,  //vértice 2 (x2,y2)
	120,60, //vértice 3 (x3,y3)
	110,90, //vértice 4 (x4,y4)
	70,95   //vértice 5 (x5,y5)
};
drawpoly(points, 5); //5 vértices`
    },
    {
      id: 'fillpoly',
      name: 'fillpoly',
      signature: 'void fillpoly(int* points_xy,int count);',
      description: 'Usa-se essa função para mostrar na tela do jogo um polígno de múltipos vértices.',
      example: `setvideomode();
while(!keystate(KEY_ESCAPE)){
    setcolor(9); //laranja
    int poly[] = { 60,60, 90,40, 120,60, 110,90, 70,95 };
    fillpoly(poly, 5); //preenche o polígono de 5 vértices
    waitvbl();
}`
    },
    {
      id: 'floodfill',
      name: 'floodfill',
      signature: 'void floodfill(int x,int y);',
      description: 'Essa função preenche (com a cor definida na função setcolor) uma área da tela que é exibida ao jogador.',
      example: `while(!keystate(KEY_ESCAPE)){
    setcolor(15); //branco para contorno
    rectangle(30,30,100,60); //desenha contorno de retângulo (largura=100, altura=60)
    setcolor(2); //cor do preenchimento (verde)
    floodfill(50,50); //ponto interior ao retângulo -> preenche o interior com a cor setada
    waitvbl();
}`
    },
    {
      id: 'boundaryfill',
      name: 'boundaryfill',
      signature: 'void boundaryfill(int x,int y,int boundary);',
      description: 'Essa função DEVERIA preencher uma área da tela',
      example: `while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
	setcolor(33);
	rectangle(50,100,115,40); //contorno retângulo

	setcolor(20); //define a cor
	boundaryfill(70,120,20); //preenchimento

	waitvbl(); //processamentos da biblioteca poly
}`
    },
    {
      id: 'blitint',
      name: 'blitInt',
      signature: 'void blitInt(int n,int x,int y);',
      description: 'Imprime um inteiro na tela',
      example: `setcolor(33);

blitInt(87,100,90); //exibe o número na tela

waitvbl(); //processamentos da biblioteca poly`
    },
    {
      id: 'sleep',
      name: 'sleep',
      signature: 'void sleep(int m)',
      description: 'pausa a sequencia de comandos que o dev escreveu por m milissegundos',
      example: `int x=72;
while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
	setcolor(33);

	blitInt(x,100,90); //exibe o número na tela

	x=x+1;
	sleep(350); //pausa a sequencia de comandos que o dev escreveu por 350 milissegundos

	waitvbl(); //processamentos da biblioteca poly
}`
    },
    {
      id: 'waitvbl',
      name: 'waitvbl',
      signature: 'void waitvbl(void)',
      description: 'Não sabemos exatamente a funcionalidade dessa função mas ela parece ser importante',
      example: `waitvbl();`
    },
    {
      id: 'rand',
      name: 'rand',
      signature: 'int rand(void)',
      description: 'Função usada para gerar números aleatórios.',
      example: `int main(){

		srand(time(0)); //semeia um numero aleatório
		int x;
		x=rand()%15; //um numero aleatorio entre o e 15

	setvideomode(); //inicia modo grafico
	while(!keystate(KEY_ESCAPE)){ //o jogo sempre continua while/enquanto o user não pressiona a tecla ESC/escape
		setcolor(33);

		blitInt(x,100,90); //exibe o número na tela

		waitvbl();
	}
	return 0;
}`
    }
  ];

  const currentFunction = functions.find(f => f.id === selectedFunction);

  const handleDownload = () => {
    alert('Download iniciado!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 px-4 sm:py-16 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Documentação Poly</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">Guia completo de todas as funções da biblioteca gráfica</p>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <Download size={18} />
            Baixar Projeto
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto px-4 pb-8 sm:pb-12">
        {/* Sidebar Toggle (Mobile) */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden w-full flex items-center justify-between bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-200"
        >
          <span>Funções</span>
          <ChevronDown 
            size={20} 
            className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:flex-shrink-0 w-full md:w-64 lg:w-72`}>
          <nav className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="space-y-1 sm:space-y-2">
              {functions.map((func) => (
                <button
                  key={func.id}
                  onClick={() => {
                    setSelectedFunction(func.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                    selectedFunction === func.id
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {func.name}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {currentFunction && (
            <article className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Function Header */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{currentFunction.name}</h2>
                <code className="inline-block bg-gray-100 text-blue-600 px-3 sm:px-4 py-2 rounded border border-gray-300 font-mono text-xs sm:text-sm font-semibold overflow-x-auto max-w-full">
                  {currentFunction.signature}
                </code>
              </div>

              {/* Description Section */}
              <section className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Descrição</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {currentFunction.description}
                </p>
              </section>

              {/* Example Section */}
              <section>
                <h3 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">
                  <Code size={20} className="text-blue-600 flex-shrink-0" />
                  <span>Exemplo de Uso</span>
                </h3>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm text-gray-100 leading-relaxed">
                    <code>{currentFunction.example}</code>
                  </pre>
                </div>
              </section>
            </article>
          )}
        </main>
      </div>
    </div>
  );
};

export default Docs;