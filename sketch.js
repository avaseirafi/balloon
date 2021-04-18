var balloon, position, database;
var backgroundImg;
var gameState = 1;

function preload(){
  backgroundImg = loadImage("sprites/back.png");
  balloonImg = loadImage("sprites/pic.png")
}

function setup() {
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  balloon = createSprite(50,200,50,50);
  balloon.addImage(balloonImg);
  balloon.scale = 0.3;
}

function draw() {
  background(0); 
  image(backgroundImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x -10;
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x +10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y -10;
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y +10;
    }

    camera.position.x = balloon.x;
    camera.position.y = displayHeight/2;

    if(balloon.x<20||balloon.x>1340){
      gameState = 2;
    }

    drawSprites();

    if (gameState ===2){
      console.log("game ended");
    }
    
}




