var rect1
var rect2


function setup() {
  createCanvas(800,400);
 rect1 = createSprite(100,100,50,20);
 rect2 = createSprite(100,100,50,20);
 rect1.shapeColor = "red"
 rect2.shapeColor = "blue"
}

function draw() {
  background("black");
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
  
if (isTouching(rect1,rect2)){
text("speed",200,200);
rect1.velocityX=4;
rect1.velocityY=4;
}
else{
 rect1.velocityX=0;
 rect1.velocityY=0; 
}
  drawSprites();

}
