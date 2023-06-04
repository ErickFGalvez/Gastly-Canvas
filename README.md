Projeto Canvas - Desenho do Pokémon Gastly
Este projeto tem como objetivo desenhar o Pokémon Gastly utilizando as funcionalidades do canvas do JavaScript.

Funcionalidades

Desenho da Fumaça do Gastly:
A função a seguir desenha a fumaça do Gastly utilizando círculos. A cor escolhida é '#483D8B', um roxo escuro semelhante à cor do Pokémon.


{
  ctx.beginPath();

  ctx.arc(330, 450, 130, 0, 4 * Math.PI);
  ctx.arc(300, 390, 130, 0, 4 * Math.PI);
  ctx.arc(330, 420, 130, 0, 4 * Math.PI);
  ctx.arc(430, 290, 130, 0, 4 * Math.PI);
  ctx.arc(450, 380, 100, 0, 4 * Math.PI);
  ctx.arc(450, 400, 100, 0, 4 * Math.PI);
  ctx.arc(500, 330, 100, 0, 4 * Math.PI);
  ctx.arc(440, 460, 100, 0, 4 * Math.PI);
  ctx.arc(480, 470, 100, 0, 4 * Math.PI);

  ctx.fillStyle = '#483D8B';
  ctx.fill();
}


Desenho do Corpo do Gastly:
A função a seguir desenha o corpo do Gastly utilizando um círculo maior que os utilizados na fumaça. A cor escolhida é '#2e2e2e', um cinza bem escuro.


{
  ctx.fillStyle = '#2e2e2e';
  ctx.beginPath();
  ctx.arc(400, 400, 120, 0, 4 * Math.PI);
  ctx.fill();
}
Desenho da Boca do Gastly:
A função a seguir desenha a boca do Gastly utilizando um semicírculo vermelho.

{
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(400, 425, 35, 0, Math.PI, false);
  ctx.fill();
}


Desenho dos Olhos do Gastly:
As duas funções a seguir desenham os olhos do Gastly utilizando dois semicírculos posicionados de forma a parecer que o Gastly está bravo. A cor utilizada é 'white'.


{
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(450, 375, 45, 11 * Math.PI / 6, 5 * Math.PI / 6, false);
  ctx.fill();
}

{
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(350, 375, 45, Math.PI / 6, 7 * Math.PI / 6, false);
  ctx.fill();
}


Desenho das Pupilas do Gastly:
As duas funções a seguir desenham as pupilas do Gastly utilizando dois semicírculos menores, posicionados na mesma posição dos olhos anteriores. A cor utilizada é 'black'.


{
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(450, 375, 10, 11 * Math.PI / 6, 5 * Math.PI / 6, false);
  ctx.fill();
}

{
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(350, 375, 10, Math.PI / 6, 7 * Math.PI / 6, false);
  ctx.fill();
}


Desenho das Presas do Gastly:
As duas funções a seguir desenham as presas do Gastly utilizando linhas retas, posicionadas de forma a parecerem dois triângulos. A cor utilizada é 'white'.


{
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.moveTo(380, 445);
  ctx.lineTo(385, 425);
  ctx.lineTo(375, 425);
  ctx.fill();
}

{
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.moveTo(420, 445);
  ctx.lineTo(425, 425);
  ctx.lineTo(415, 425);
  ctx.fill();
}
