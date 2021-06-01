var bg, bg_image;
var fg, fg_image;
var bird, bird_image;
var pipe1,pipeDown_image;
var pipe2,pipeUp_image;
var pipe1Group,pipe2Group;

function preload() {
bg_image=loadImage("background.png");
fg_image=loadImage("ground.png");
bird_image=loadImage("bluebird.png");
pipeDown_image=loadImage("PipeDown.png");
pipeUp_image=loadImage("PipeUp.png");
}

function setup() {
  createCanvas(800,800);

  bg=createSprite(10, 200, 0, 0);
  bg.addImage(bg_image);

  fg=createSprite(144,800,20,20);
  fg.addImage(fg_image);

  bird=createSprite(200,300,20,20);
  bird.addImage(bird_image);

  pipe1Group=new Group();
  pipe2Group=new Group();
}

function draw() {
  background(0,151,157);  

  fg.velocityX=-5;

  if(fg.x<100) {
    fg.x=fg.width/2;
  }

  if(keyDown("space")) {
    bird.y=bird.y - 15;
  }
  else{
    bird.velocityY=3;
  }
  
  pipe_move();
  pipe2Group.collide(fg);
  drawSprites();
}

function pipe_move() {
  if(frameCount%75===0) {
    pipe1=createSprite(700,500,10,0);
    pipe1.addImage(pipeDown_image);
    pipe1.y=random(0,50);
    pipe1.velocityX=-6;
    pipe1.scale= 0.6;
    pipe1Group.scale= 0.2;
    pipe1Group.add(pipe1);
    pipe1Group.setLifetimeEach(144);

    pipe2=createSprite(700,100,10,800);
    pipe2.addImage(pipeUp_image);
    pipe2.y=random(462,512);
    pipe2.velocityX=-6;
    pipe2.scale= 0.9;
    pipe2Group.scale= 0.2;
    pipe2Group.add(pipe2);
    pipe2Group.setLifetimeEach(144);
    

  }
}