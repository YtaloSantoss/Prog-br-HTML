let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");


let circle = {
    x: 205,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0 * Math.PI,
}


function drawCircle(c){
//----------------------------
    ctx.beginPath();
    ctx.rect(0,0,500,500)
    ctx.fillStyle = " bisque",
    ctx.fill()
//---------------------------- 
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    ctx.fill();
    ctx.stroke();



}

setInterval(function(){

    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.1;
        circle.x += 3;
        
    }    
    drawCircle(circle);

},50)