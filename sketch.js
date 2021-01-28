
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(100,100,100)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob (380,420)
	bob2 = new Bob (360,405)
	bob3 = new Bob (340,395)
	bob4 = new Bob (320,399)
	bob5 = new Bob (300,410)

	rect1 = new Rect(400,50,800,30)

	rope1 = new Rope(bob1.body,{x:400,y:50})
	rope2 = new Rope(bob2.body,{x:400,y:50})
	rope3 = new Rope(bob3.body,{x:400,y:50})
	rope4 = new Rope(bob4.body,{x:400,y:50})
	rope4 = new Rope(bob5.body,{x:400,y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rect1.display();
  bob1.display();
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  
  console.log(bob1.body.position.x,bob1.body.position.y)
  drawSprites();
 
  line (bob1.body.position.x,bob1.body.position.y,rect1.body.position.x+120,rect1.body.position.y)
  line (bob2.body.position.x,bob2.body.position.y,rect1.body.position.x+75,rect1.body.position.y)
  line (bob3.body.position.x,bob3.body.position.y,rect1.body.position.x,rect1.body.position.y)
  line (bob4.body.position.x,bob4.body.position.y,rect1.body.position.x-79,rect1.body.position.y)
  line (bob5.body.position.x,bob5.body.position.y,rect1.body.position.x-130,rect1.body.position.y)
  craddleUse()
}

function craddleUse(){
	if(keyWentDown(RIGHT_ARROW)){
		Body.applyForce(bob1.body,bob1.body.position,{x:1005,y:-0})
	}
	else if(keyWentDown(LEFT_ARROW)){
		Body.applyForce(bob5.body,bob5.body.position,{x:-1005,y:-0})
	}
}

