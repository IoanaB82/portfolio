const canvasTotoro = document.getElementById("totoro");
const ctxTotoro = canvasTotoro.getContext('2d');

let img = new Image();
img.onload = function() {
    ctxTotoro.circle(img, 312, 0);
    img.style("height", "101%");
    
}
img.src = "images/totoro.png";