const canvas = document.querySelector('#canvas');
 canvas.width = 800;
      canvas.height = 800;
     const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

//desenha a fumaça do gastly com formas redondas
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
 //desenha o corpo do gastly 
  {
        ctx.fillStyle = '#2e2e2e';
        ctx.beginPath();
        ctx.arc(400, 400, 120, 0, 4 * Math.PI);
ctx.fill();
      }
	  
 //desenha a boca do gastly
 {
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(400, 425, 35, 0, Math.PI, false);

        ctx.fill();
 }
 //desenha os olhos do gastly
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
//desenha as pupilas do gastly
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
{
//desenha as presas do gastly
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