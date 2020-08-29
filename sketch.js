var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(200,200,50,80);
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
    //bounceOff(movingRect,fixedRect);
    movingRect.x = mouseX;movingRect.y = mouseY;
    if (isTouching(gameObject1,movingRect)){
      gameObject1.shapeColor="blue";
      movingRect.shapeColor="blue";
    }
    else {
      gameObject1.shapeColor="green";
      movingRect.shapeColor="green";
    }
   drawSprites();
}

