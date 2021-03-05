var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
var particles= [];
var plinkos= [];
var divisions=[];
var divisionHeight = 300
var score=0;
var particle;
var turn=0;
function setup() {
  createCanvas(480,800);
engine=Engine.create();
world=engine.world;
ground=new Ground(width/2,height,width,20);
var divisionHeight=300;
for(var k = 0; k<=width;k=k+80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    }
    for(var j= 40;j<=width;j=j+50){
plinkos.push(new Plinko(j,75))
    }
    for (var j =15; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,175))
    }
    for(var j=0;j< divisions.length; j++){
particles[j].display()
    }
    for(var k=0;k<divisions.length; k++)
    divisions[k].display();
}
if(particle!=null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      score=score+50;
      particle=null;
      if(count>=5) gameState= "end"
    }
  }
}
function draw() {
  background(255,255,255);  
 
  drawSprites();
}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10)
  }
}