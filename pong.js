let playerPaddle
let aipaddle

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle (26);
  aipaddle = new Paddle(width - 48);
}

function draw() {
  background(0);
  playerPaddle.display()
  aipaddle.display();
}
