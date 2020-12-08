var helicopterIMG; 
var helicopter; 
var package;
var packageIMG;
var packageBody;
var ground;
var Wall1;
var Wall2; 
var Wall3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.47, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Wall1 = new Wall(380,645,280,30);
	Wall2 = new Wall(255,580,30,100);
	Wall3 = new Wall(505,580,30,100);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  package.x = packageBody.position.x 
  package.y = packageBody.position.y

  Wall1.display(); 
  Wall2.display(); 
  Wall3.display(); 
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
  }
}