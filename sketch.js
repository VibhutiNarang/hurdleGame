var girl,girl_running,fallenGirl,fallenGirlImg
var hurdle1Img,hurdle2Img,hurdle3Img,r
var ground,groundImg,invisibleGround,ground1Img,ground1
var score = 0
var hurdle
var gameState = 1
var PLAY = 1
var END = 0

function preload(){
girl_running = loadAnimation("girl_1.png","girl_2.png","girl_3.png","girl_4.png","girl_5.png","girl_6.png","girl_7.png","girl_8.png")
  fallenGirl = loadImage("fallen_girl.png")
  hurdle1Img = loadImage("hurdle1.png")
  hurdle2Img = loadImage("hurdle2.png")
  hurdle3Img = loadImage("hurdle3.png")
  groundImg = loadImage("background.jpg")
  ground1Img = loadImage("background.jpg")
}

function setup() {
  createCanvas(600,400)

  ground = createSprite(200,150)
  ground.addImage("ground",groundImg)
 // ground.x = ground.width/2
  ground.scale = 2.30
  //ground.velocityX = -4
  
   girl = createSprite(100,300)
  girl.addAnimation("running",girl_running)
  
  invisibleGround = createSprite(300,370,600,10)
  invisibleGround.visible = false
  
  hurdleGroup = new Group();
}

function draw() {
  background("aqua")
  //score = score+1
  
  if (gameState === PLAY){
  score = score + Math.round(getFrameRate()/60)
  ground.velocityX = -(5 + 3* score/100);
  
  if (ground.x < 0){
  ground.x = ground.width/2;     
  }
  
  if (keyDown("space")&&girl.y >= 100){
    girl.velocityY = -15;
  }
  girl.velocityY = girl.velocityY + 0.8;
    
     if (hurdleGroup.isTouching(girl)){
   gameState = END;
  }
    
  } 
    girl.collide(invisibleGround)
  
  if (gameState === END) {
   girl.addAnimation("running",fallenGirl);
    girl.y = 300
    hurdleGroup.destroyEach();
    hurdle.setVelocityEach = 0
    ground.setVelocityEach = 0
    ground.x = 200
  }

  
 drawSprites();
  text("score:"+score,500,50)
  hurdlef();
}

function hurdlef(){
  if(World.frameCount%90===0){
    r = Math.round(random(1,2))
    hurdle = createSprite(600,350)
    hurdle.velocityX = -5
    hurdle.scale = 0.25
    if (r === 1){
      hurdle.addImage(hurdle1Img)
   //   hurdle.debug = true 
      hurdle.setCollider("rectangle",0,0,hurdle.width/2,hurdle.height/2);
    }else if (r === 2){
      hurdle.addImage(hurdle2Img)
      hurdle.debug = true       
                hurdle.setCollider("rectangle",0,0,hurdle.width/2,hurdle.height/2);
    }//else
     // hurdle.addImage(hurdle3Img)
    hurdleGroup.add(hurdle)
  }

}

