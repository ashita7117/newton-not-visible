
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	roof = new Ground(300,200,300,27)
	bob1 = new Box(400,200,20);
	bob2 = new Box(400,300,70)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof.display();
  bob2.display();
  bob1.display();
  drawSprites();
 
}



