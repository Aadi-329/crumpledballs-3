var ground,ball,dustbin1,cons
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dust=	loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20);
ball=new Ball(200,200,20);


dustbin1=new dustbin(650,660,200,10);

cons=new SlingShot(ball.body,{x:200,y:100})
	Engine.run(engine);

}


function draw() {
  background(255,255,255);
  ground.display();
  ball.display();
 dustbin1.display();
 cons.display();
  //keypressed();
}

//function keypressed(){
//if(keyDown(UP_ARROW)){

//Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-5})}

//}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}
function mouseReleased(){
	cons.fly();
}