
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,680,1200,20)	
	stone1 = new Stone (100,100,100,100)
	rubber1 = new Rubber (300,100,30)
	hammer1 = new Hammer (500,100,100,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground1.display()
  stone1.display()
  rubber1.display()
  hammer1.display()
}



