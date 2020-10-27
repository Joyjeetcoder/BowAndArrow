const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var bowImg,arrowImg,targetImg;
var engine,world;
var arrow;
var wall1,wall2,wall3,wall4;
var target;
var bow;
var point;
var chain;
var box1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  arrow = new Arrow(200,254,2*PI/3);
  
  wall1 = new Wall(400,380,800,10);
  wall2 = new Wall(780,200,10,400);
  wall3 = new Wall(400,20,800,10);
  wall4 = new Wall(20,200,10,400);

  target = new Target(700,200);

  bow = new Bow(200,260,60,100,PI/2);

  point = new String(arrow.body,{x:200,y:260});

  box1 = new Box(400,200,20,20);
  console.log(arrow.body.position.x);

  //chain = new Chain(bow.body,arrow.body);
}



function draw() {
  background("white");
  Engine.update(engine);
  arrow.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  target.display();

  bow.display();
  box1.display();

  
  hit();
  
  
  
  
}

function hit(){
  if(arrow.body.position.x<=705 && arrow.body.position.x >= 695 && arrow.body.position.y >= 195 && arrow.body.position.y >= 205){
    console.log("hit");
  }
}
function mouseDragged(){
  
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
    point.fly();
}
