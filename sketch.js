
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var rightSide,leftSide,bottom;
var ground;
var paper, paperImg,bottomImg;

function preload(){
 bottomImg= loadImage("images/dustbingreen.png");
 paperImg= loadImage("images/paper.png");
     

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;



	var option={
		isStatic:true,
		density:1,
		restiution:0
	}

	//Create the Bodies Here.
	paper= new Paper(100,400,25);

	// paper.addImage("paper", paperImg);
	// paper.scale=0.5;

	leftSide= createSprite(880,420,20,100,option);
	World.add(world,leftSide);
	rightSide= createSprite(980,420,20,100,option);
	World.add(world,rightSide);
	bottom= createSprite(930,400,150,20,option);
	bottom.addImage("bin", bottomImg);
	bottom.scale= 0.5;
	World.add(world,bottom);
	ground= createSprite(400,500,1600,25,option);
	World.add(world,ground);

	Launcher= new Launcher(paper.body,{x:500,y:100});


	// var render= Render.create({
	// 	element:document.body,
	// 	engine:engine,
	// 	options:{
	// 		width:1600,
	// 		height:700,
	// 		wireframes:false
	// 	}
	// })
	// Render.run(render);
	// Engine.run(engine);




  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  paper.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	Launcher.fly();
}



