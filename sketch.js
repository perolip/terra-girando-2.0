function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra=loadImage('terra.jpg')
}

function draw() {
  background(0, 0, 0); // Fundo preto
  rotateY(millis()/6000);
  texture(terra);
  sphere(150); // Esfera maior
  
}
