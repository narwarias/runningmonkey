
var monkey , monkey_running;
var bananaImage,banana,  obstacleImage,obstacle;
var FoodGroup, obstacleGroup
var survivalTime=0;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
//   groundImage=loadImage("ground.jpg")
 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   

}
function setup() {
  monkey=createSprite(80,470,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
 
  
  ground=createSprite(80,540,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
//    ground = createSprite(400,350,900,10);
//   ground.velocityX=4; 
//   ground.x=ground.width/2; 
//   console.log(ground.x)
  
  score=0;
  // banana=createSprite(200,300,10,10);
  invisibleGround = createSprite(80,540,9900,10);
  invisibleGround.visible = true;
  
monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
}


function draw() {
  
   createCanvas(600,600);

  background("lightblue");
   stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,300,50);
  
  


   stroke ("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("score:"+score,300,50);
  
  spawnobstacle();
  spawnbanana();
  
  
 drawSprites();
     if(keyDown("space")&& monkey.y >= 400) {
        monkey.velocityY = -17;
       
    }
  monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(invisibleGround);
}
function spawnobstacle(){
  if (frameCount % 80 === 0){
    obstacle = createSprite(400,510,10,40);
   obstacle.velocityX = -6 ;
   
obstacle.scale=0.2;
      obstacle.addImage(obstacleImage);
           obstacle .lifetime = 300;
}


}
function spawnbanana(){
    if (frameCount % 80 === 0) {
  banana = createSprite(400,390,40,10);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
      banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
banana.lifetime = 100;
      
    //adjust the depth
      banana.depth =   banana.depth;
   banana.depth =   banana.depth + 1;
  
  
  
    }
  
  
}





