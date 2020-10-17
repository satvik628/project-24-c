
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ballBody;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	boxSide1=new Dustbin(800,height-50,300,20);
	
	  
	  boxSide2=new Dustbin(960,height-100,20,120);
	 
	  boxSide3=new Dustbin(640,height-100,20,120);

	ball=new Ball(50,500,25);
	
	

	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
 background("black");

 
 



 rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,1000,20)
  
  


  ball.display();
  
 
 boxSide1.display() ;
 boxSide2.display() ;
 boxSide3.display() ;
  
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
 
 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

 }

}

