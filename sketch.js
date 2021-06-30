const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grass,bg;
// var castleimg;
 function preload(){
    grass=loadImage("Grass.jpg")
    bg=loadImage("background trees.jpg")
 }
function setup(){
    var canvas = createCanvas(1350,700);
    engine = Engine.create();
    world = engine.world;
    // imageMode(CENTER);
   
  //  ground=new Ground(400,750,2000,20)
 
  castle=new Castle(590,330,300,500)
 archerMan=new Archer(850,150,100,80)
 castle=new Castle(590,330,300,500)
 zombie=new Zombies(1000,700,400,300)
 bow=new Bow(370,380,100,80)
 arrow=new Arrow(218,500,100,80)
treasureBox=new Treasure(300,720,50,60)
shoot = new Shoot(arrow.body,{x:360, y:600});

}

function draw(){
   
   background("white")
    Engine.update(engine);

    //image(grass, 0, 0,500, 100);
    image(bg, 0, 0,1500, 800);
 
   shoot.display();
   
    // ground.display();
    castle.display();
    archerMan.display();
     zombie.display();
  bow.display();
  arrow.display();
  treasureBox.display();


}

 function mouseDragged(){

      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY}); 
}
function mouseReleased(){
  shoot.fly();
  // arrow.movable();




}
