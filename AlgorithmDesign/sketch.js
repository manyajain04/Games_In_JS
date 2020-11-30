function setup() {
  createCanvas(1200,800);
  fixed = createSprite(200, 200, 50, 80);
  moving = createSprite(400, 200, 80, 50);
  fixed.shapeColor = 'green';
  moving.shapeColor = 'green';
}

function draw() {
  background(255,255,255); 
  moving.x = World.mouseX; 
  moving.y = World.mouseY;
  console.log(moving.x - fixed.x);
  if (moving.x - fixed.x < moving.width/2 + fixed.width/2) {
    fixed.shapeColor = 'red';
    moving.shapeColor = 'red';
  }
  else {
    fixed.shapeColor = 'green';
    moving.shapeColor = 'green';
  }
  drawSprites();
}