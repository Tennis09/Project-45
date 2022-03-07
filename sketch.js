var bg,bgImg;
var thief, thief1_img, thief2_img;
var coin, coin_img, diamond, diamond_img;
var officer, officer_img, handcufffs, handcuffs_img;


function preload(){
  
  thief1_img = loadImage("thief1.png")
  thief2_img = loadImage("thief2.png")
  coin_img = loadImage("coin.png")
  diamond_img = loadImage("diamond.png")
  officer_img = loadImage("officer.png")
  handcuffs_img = loadImage("handcuffs.png")
  bgImg = loadImage("bg.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.35
  

//creating the player sprite
thief = createSprite(displayWidth-1120, displayHeight-410, 50, 50);
 thief.addImage(thief1_img)
   thief.scale = 0.3
   thief.debug = true
   thief.setCollider("rectangle",0,0,300,300)



}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  thief.y = thief.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 thief.y = thief.y+30
}



//player changes image when he hits a coin or money image
 //if(thief.istouching(coin) && thief.istouching(diamond)){
 // player.addImage(thief2_img);
//}

drawSprites();

}
