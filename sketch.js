var player, running, powerUP, running2, collided;
var ground, invisibleGround;
var backgroundImg

function preload(){
  backgroundImg = loadImage("images/BG.png");
  getBackGroundImg();
 running = loadAnimation("Images/Goku.png","Images/Goku2.png","Images/Goku3.png","Images/Goku4.png","Images/Goku5.png","Images/Goku6.png","Images/Goku7.png","Images/Goku8.png",);
 powerUP = loadAnimation("Images/Goku9.png","Images/Goku10.png","Images/Goku11.png")
 running2 = loadAnimation("Images/Goku12.png")
 collided = loadAnimation("Images/Goku13.png","Images/Goku14.png","Images/Goku15.png","Images/Goku16.png","Images/Goku17.png","Images/Goku18.png","Images/Goku19.png")
 getBackGroundImg();

}

function setup(){
createCanvas(windowWidth,windowHeight);
  
getBackGroundImg();
  ground = createSprite(300,180,windowWidth,windowHeight);
  ground.addImage("ground",backgroundImg);
  ground.x = ground.width /2;
  ground.velocityX = -1.5

  invisibleGround = createSprite(200,550,windowWidth,10)
  invisibleGround.visible = false;

  powerUP.frameDelay = 10; 
player = createSprite(200,460,50,50);
player.addAnimation("running", running)
player.addAnimation("power", powerUP)
player.addAnimation("running2", running2)
player.scale = 2
            


}

function draw(){

    ground.velocityX = -1.5

    if(keyDown("P")){
      player.changeAnimation("power", powerUP) 
      ground.velocityX = 0;
    }else if (keyWentUp("P")){
      player.changeAnimation("running2", running2)
    } 

    if(keyDown("space")){
      player.velocityY = -10;

    }
    player.velocityY += 0.8 

    player.collide(invisibleGround)




if (ground.x < 550){
    ground.x = ground.width/2;
  }


drawSprites()

}

async function getBackGroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responsejson = await response.json();
  var date = responsejson.datetime
  console.log(date);
  var hour = date.slice(11,13);
  if (hour >= 06 && hour<= 12){
      bg = "images/BG.png"
  } else if (hour >= 12 && hour<= 17){
      bg = "images/BG4.jpg"
  } else if (hour >= 17 && hour<= 19){
      bg = "images/BG2.png"
  }else if (hour >= 19 && hour<= 06){
      bg = "images/BG4.jpg"
   }

  backgroundImg = loadImage(bg);
}