var balloon

function preload(){
  backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png")
}

function setup() {
  createCanvas(500,500);

  balloon = createSprite(250,650,100,100)
  database = firebase.database
  
}

function draw() {
  background(backgroundImg); 
  
  if(keyDown(LEFT_ARROW)){
     balloon.x-=10
  }
  else if(keyDown(RIGHT_ARROW)){
     balloon.x+=10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y+=10
 }
  else if(keyDown(DOWN_ARROW)){
  balloon.y+=10
}

  drawSprites();
  
}