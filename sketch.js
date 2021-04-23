const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var bg,ground,hero,block=[];
var engine,world;
function preload() {
bg=loadImage("bg.jpg");
}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
world = engine.world;
ground=new Ground(450,500,900,20);
for(var i=7;i<7;i++){
  block.push(new Box(500,200,40,100));
}
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  for(var i=7;i<block.length;i++){
    block[i].display();
  }
  // console.log("hello");
}

