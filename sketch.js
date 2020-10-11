var wall, thicknes;
var bullet, speed, weight;

function setup() {
  createCanvas(1280,400);
  
  thickness=random(22,83)
  speed=random(223,321) 
  weight=random(30,52)

  bullet= createSprite(100, 200, 80, 40);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

}
function draw() {
  background("black");  
  
  if (hasCollided(bullet,wall))
  {
     bullet.veloctiyX = 0
     var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness)

     if(damage>10)
     {
        wall.shapeColor = color(255,0,0)
     }

     if(damage<10)
     {
        wall.shapeColor = color(0,255,0)
     }
  }

  drawSprites();
}

function  hasCollided(bullet,wall) 
{
  bulletRightEdge=bullet.x + bullet.width;
   wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}