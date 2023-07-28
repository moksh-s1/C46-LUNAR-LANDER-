var lander, landerImg;
var ground, bgImg, background;
var fuel = 100;
var vx = 0;
var vy = 0;
var g = 0.05;

function preload(){
  bgImg = loadImage("assets/bg_sur.png");
  landerImg = loadImage("assets/real ship.png");
  landerthrustImg = loadAnimation("assets/lander_thrust.png")
  bgLandImg = loadAnimation("assets/bg.png");
}

function setup(){
  createCanvas(1000, 700);
  lander  = createSprite(500, 600, 100, 100);
  lander.addImage(landerImg);
  lander.scale = 0.5;
  lander.addAnimation("thrusting", landerthrustImg);
  rectMode(CENTER);
  textSize(14);
}

function draw(){
  //background("blue");
  //background = createSprite(500, 350, 1000, 700);
  //background.addImage(bgImg);
  //background.addAnimation("change")
  background = image(bgImg, 0, 0);
  push();
  fill(255);
  text("Vertical Velocity: " +round(vy), 800, 75);
  text("Horizontal Velocity: " +round(vx), 800, 50);
  fill("yellow")
  text("Fuel Level: " +round(fuel), 20, 50);
  pop();
  vy = vy + g;
  lander.position.y = lander.position.y + vy
  drawSprites();
}

function keyPressed(){
  if(keyCode ==  UP_ARROW){
    vy = -1;
    fuel = fuel - 1
    lander.changeAnimation('thrusting');
    console.log(lander.position.y);
    takeOff();
  }

  if(keyCode == LEFT_ARROW){
    vx = vx + 0.1
    fuel = fuel - 1
  }

  if(keyCode == RIGHT_ARROW){
    vx = vx - 0.1
    fuel = fuel - 1
  }
}

/*function takeOff(){
  if(lander.position.y <= 600){
    background.changeImage(bgLandImg);
  }
}*/

function stop(){
  vx = 0
  vy = 0
  fuel = 0
  g = 0  
}