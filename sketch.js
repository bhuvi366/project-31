const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score =0;
var count=0;
var gameState = "start";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

     
    
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }  
}
 


function draw() {
  background("indigo");
  
  
  Engine.update(engine);
  //Render.run(render);
  ground.display();
 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
   
   
  
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }
  if(particle != null) {
    particle. display(); 
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 300) {
        score = score + 500;             
      } 

      if(particle.body.position.x > 300 && particle.body.position.x < 600 ) {
        score = score + 100;     
      } 

      if(particle.body.position.x > 600 && particle.body.position.x < 900 ) {
        score = score + 200;     
      } 

      particle = null;
      if( count >= 5) gameState = "end";  
    }

  }

  if(gameState === "end"){
    textSize(50);
    fill("violet");
    text("GAME OVER",250,250);
  } 

  textSize(25) 
  text("Score : "+score,20,30);
  text("500",20,550);
  text("500",100,550);
  text("500",180,550);
  text("500",250,550);
  text("100",350,550);
  text("100",430,550);
  text("100",500,550);
  text("200",590,550);
  text("200",650,550);
  text("200",750,550);
}