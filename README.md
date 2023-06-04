# Gastly-Canvas
Elaborar uma Cena ou personagem utilizando as funções do canvas em Javascript. Utilizar as funções trabalhadas em aula.
Projeto Canvas 
esse programa tem como objetivo desenhar o pokemon gastly utilizando as formas do canvas do java script.

essa funçao desenha a fumaça do gastly utilizando circulos e eu escolhi a cor 483d8b que é um roxo escuro, sendo uma cor mais similar a do pokemon.
   {
   ctx.beginPath();

ctx.arc(330, 450, 130, 0, 4*Math.PI);
ctx.arc(300, 390, 130, 0, 4*Math.PI);
ctx.arc(330, 420, 130, 0, 4*Math.PI);
ctx.arc(430, 290, 130, 0, 4*Math.PI);
ctx.arc(450, 380, 100, 0, 4*Math.PI);
ctx.arc(450, 400, 100, 0, 4*Math.PI);
ctx.arc(500, 330, 100, 0, 4*Math.PI);
ctx.arc(440, 460, 100, 0, 4*Math.PI);
ctx.arc(480, 470, 100, 0, 4*Math.PI);

   
ctx.fillStyle = '#483D8B';
ctx.fill();
 }
 
 essa funçao desenha o corpo do gastly utilizando um circulo maior que os utilizados na fumaça ele tem a cor 2e2e2e que é um cinza bem escuro.
  {
        ctx.fillStyle = '#2e2e2e';
        ctx.beginPath();
        ctx.arc(400, 400, 120, 0, 4 * Math.PI);
ctx.fill();
      }
      
	  
 essa funçao desenha a boca do gastly utilizando um semi circulo vermelho.
 {
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(400, 425, 35, 0, Math.PI, false);

        ctx.fill();
 }
 essa funçao desenha os olhos do gastly utilizando 2 semi circulos posiçionados de forma com que pareçam que o o gastly esta bravo.
 {
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(450, 375, 45, 11*Math.PI/6, 5*Math.PI/6, false);
ctx.fill();
 }
 {
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(350, 375, 45, Math.PI/6, 7*Math.PI/6, false);
ctx.fill()
}
essa funçao desenha as pupilas do gastly utilizando 2 semi circulos menores na mesma posiçao que os anteriores.
{
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(450, 375, 10, 11*Math.PI/6, 5*Math.PI/6, false);
ctx.fill();
 }
 {
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(350, 375, 10, Math.PI/6, 7*Math.PI/6, false);
ctx.fill()
}
essa funçao desenha as presas do gastly utilizando linhas retas posicinadas para parecerem 2 triangulos.
{
ctx.beginPath();
ctx.fillStyle ='white';
    ctx.moveTo(380,445);
    ctx.lineTo(385,425);
    ctx.lineTo(375,425);
    ctx.fill();
 
}
{

    ctx.beginPath();
ctx.fillStyle ='white';
    ctx.moveTo(420,445);
    ctx.lineTo(425,425);
    ctx.lineTo(415,425);
    ctx.fill();
 
}
