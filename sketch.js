var bg,bg2,form,system,code,security;
var treasure,treasureImg;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");

  treasureImg = loadImage("treasure_box.png");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  treasure = createSprite(370,400,20,20);
  treasure.addImage(treasureImg);
  treasure.scale = 1.2;

  treasure.visible = false;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    treasure.visible = true;
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",200, 200);
  }

  drawSprites()
}