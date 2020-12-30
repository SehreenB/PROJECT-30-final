const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand1, stand2;
var polygon;
var slingshot;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //stand 1
  //level 4
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level 3
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level 2
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //level 1
  block16 = new Box(390,155,30,40);

  //stand 2
  //level 3
  block17 = new Box(640,175,30,40);
  block18 = new Box(670,175,30,40);
  block19 = new Box(700,175,30,40);
  block20 = new Box(730,175,30,40);
  block21 = new Box(760,175,30,40);
  //level 2
  block22 = new Box(670,135,30,40);
  block23 = new Box(700,135,30,40);
  block24 = new Box(730,135,30,40);
  //level 1
  block25 = new Box(700,95,30,40);


  //polygon
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100, y:200});

}
function draw() {
  background(56,44,44); 

  //text
  textSize(19);
  fill("white");
  text("Drag and release the hexagonal stone to lauch towards the blocks. Press space bar for another chance!", 10,30)


  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("lightblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("lightgreen");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("orange");
  block13.display();
  block14.display();
  block15.display();
  fill("red");
  block16.display();
  fill("purple");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("blue");
  block22.display();
  block23.display();
  block24.display();
  fill("lightblue");
  block25.display();

  imageMode(CENTER)
  image(polygonImg, polygon.position.x, polygon.position.y, 40,40);

  slingshot.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
