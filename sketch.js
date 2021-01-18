 const Engine = Matter.Engine
 const World = Matter.World
 const Bodies = Matter.Bodies


var engine, world, box;



function setup() {
  createCanvas(400, 400);
  engine = Engine.create() 
  world = engine.world

  var options = { 
    isStatic : true
  }

  ground = Bodies.rectangle(100,100,400,10,options)
  World.add(world,ground)
  console.log(ground)

}

function draw() {
  background(0, 0, 0);

  Engine.update(engine)
 

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)

  drawSprites();
}


