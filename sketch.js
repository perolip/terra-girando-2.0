function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
}

function draw() {
  background(0, 0, 0); // Cor de fundo preta
  rotateY(millis() / 1000);
  texture(terra);
  sphere(200); // Aumentei o tamanho da Terra para 200
}
