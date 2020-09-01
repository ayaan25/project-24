
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
var canvas=	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new Ground(600,350,1200,20);
  box1 = new Box(1000,325,10,50);
  box2 = new Box(1010,345,50,10);
  box3 = new Box(1060,325,10,50);
  paper = new PaperClass(100,325,25);

  
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}



