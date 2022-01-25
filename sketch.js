var canvas;
var background_img;
var bg;
var test;

function preload() {
 background_img=loadImage("/assets/Jungle Bg.jpg")
}

function setup() {
createCanvas(900, 700);



bg = createSprite(450,350);
bg.addImage(background_img);

test= createSprite(50,300,50,50)
test.velocityX=3

}

function draw() {
  background("black");




drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
