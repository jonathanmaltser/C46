var player, playerImage;
var cellImage;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  cellImage = loadImage("assets/Cell.png")
  playerImage = loadImage("assets/Player.png");
}

function draw(){
  background(cellImage);
  drawSprites();
}