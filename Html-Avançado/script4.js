

let cabecaQuadrada = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function moverJogadorPara( x, y){
    
    let posX = x + "px";
    let posY = y + "px";

    
    cabecaQuadrada.style.top = posX;
    cabecaQuadrada.style.left = posY;

}



setInterval(function(){
   
    moverJogadorPara(xInicial++,yInicial++)

},500)
// setInterval esta recebendo dois argumentos a função e o tempo de meio segundo 500milisegundo