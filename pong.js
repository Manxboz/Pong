let playerPaddle;
let aipaddle;
let ball;
let score;
let aiscore;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle (26);
  aipaddle = new Paddle(width - 48);
  ball = new Ball();
  playerscore = new Score(width / 2 - 40);
  aiscore = new Score(width / 2 + 40);
}

function draw() {
  background (0,128,0);
	
  playerPaddle.display();
  aipaddle.display();
	
  playerPaddle.update();
  aipaddle.update();  
  
  if (playerPaddle.isUp) {
    playerPaddle.up();
  } else if (playerPaddle.isDown) {
    playerPaddle.down();
  }
	
  processAI(); 
	
  ball.update(playerscore, aiscore); 
  ball.display(); 

  ball.hasHitPlayer(playerPaddle); 
  ball.hasHitAi(aipaddle); 
	
  stroke(255); 
  line(width/2, 0, width/2, height);

  playerscore.display();
  aiscore.display();
}

function processAI() {
  let middleOfPaddle = aipaddle.y + aipaddle.height / 2;
	
  if (middleOfPaddle > ball.y) {
    aipaddle.isUp = true;
    aipaddle.isDown = false;
  } else {
    aipaddle.isDown = true;
    aipaddle.isUp = false;

  }
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
		playerPaddle.isUp = true;
	} else if (keyCode == DOWN_ARROW) {
		playerPaddle.isDown = true;
	}
}

function keyReleased() {
	if (keyCode == UP_ARROW) {
		playerPaddle.isUp = false;
	} else if (keyCode == DOWN_ARROW) {
		playerPaddle.isDown = false;
	}

}