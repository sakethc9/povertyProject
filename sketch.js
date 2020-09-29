var girlAnimation , girl ;
var smallBoyImg , smallBoy ;
var oldmanImg , oldman ; 
var youngManImg , youngMan ;
var injuredManImg , injuredMan ; 
var schoolImg , school ;
var hospitalImg , hospital ; 
var shopImg  , shop ; 
var oldAgeHomeImg , oldAgeHome ;
var border1 , border2 , border3 ,border4 ,border5 ,border6, border7, border8,border9, border10,border11 ,border12 , border13 , border14 , border15 , border16 ,border17 ,border18 , border19 , border20 , border21 , border22 , border23 , border24 , border25 , border26 , border27 , border28 , border29 , border30  , border31 , border32 , border33 , border34 , border35 , border36 , border37 , border38 , borer39 , border40 , border41 , border42 , border43 , border44 ; 
var heartImg1 , heart1 , heart2 , heart3 ;



function preload()
{
  smallBoyImg = loadImage("images/smallBoy.png");

  youngManImg = loadImage("images/youngManImg.png");

  oldmanImg = loadImage("images/oldManImg.png");

  injuredManImg = loadImage("images/injuredManImg.png");

  girlAnimation = loadAnimation("images/GirlImg1.png","images/GirlImg2.png","images/GirlImg3.png","images/GirlImg4.png","images/GirlImg5.png","images/GirlImg6.png","images/GirlImg7.png","images/GirlImg8.png");

  schoolImg = loadImage("images/schoolImg.png");

  hospitalImg = loadImage("images/hospitalImg.png")

  shopImg = loadImage("images/shopImg.png");

  oldAgeHomeImg = loadImage("images/oldAgeHomeImg.png");

  heartImg1 = loadImage("images/heartImg.png");

  

  

  
}

function setup() {
  createCanvas(1300, 800);

  heart1 = createSprite(520,20,10,10);
  heart1.addImage("heart" , heartImg1);
  heart1.scale = 0.2 ;

  heart2 = createSprite(570,20,10,10);
  heart2.addImage("heart" ,  heartImg1);
  heart2.scale = 0.2 ;

  heart3 = createSprite(620,20,10,10);
  heart3.addImage("heart" , heartImg1);
  heart3.scale = 0.2 ;

 

  school = createSprite(285,140,10,10)
  school.addImage("school",schoolImg);
  school.scale = 0.6  ;

  hospital = createSprite(160,500,10,10);
  hospital.addImage("hospital" , hospitalImg);
 
  oldAgeHome = createSprite(1160,500,10,10);
  oldAgeHome.addImage("oldAgeHome" , oldAgeHomeImg);
  oldAgeHome.scale = 0.6 ;

  shop = createSprite(820,100,10,10); 
  shop.addImage("shop" , shopImg); 
  shop.scale = 0.3 ; 
  

  girl = createSprite(1190,105,20,20);
  girl.addAnimation("Girl Animation" , girlAnimation);
  girl.scale = 0.5 ;

  smallBoy = createSprite(723,305,10,10);
  smallBoy.addImage("Boy", smallBoyImg);
  smallBoy.scale = 0.1 ;


  oldman = createSprite(150,270,20,20);
  oldman.addImage("old man" , oldmanImg);
  oldman.scale = 0.3 ;

  youngMan = createSprite(160,435,20,20);
  youngMan.addImage("young man", youngManImg);
  youngMan.scale = 0.3 ; 

  injuredMan = createSprite(330,340,20,20);
  injuredMan.addImage("injured man", injuredManImg);
  injuredMan.scale = 0.1 ;

   border1 = new Log(578,441,1 , 0, 0);
   
   border2 = new LogV(677,400,0.5 , 0, 0);

   border3 = new Log(1150,50,1 , 0 ,0);

   border4 = new LogV(1040,140,1 , 0, 0);

   border5 = new Log(1225,172,1 , 0, 0);

   border6 = new LogV(1245,19,0.7, 0, 0);

   border7 = new LogV(1135,266,1, 0, 0);

   border8 = new Log(948,245,1, 0, 0);

   border9 = new LogV(850,280,0.3, 0, 0);

   border10 = new LogV(677,300,0.5, 0, 0);

   border11 = new Log(715,250,0.4, 0, 0);

   border12 = new LogV(755,214,0.4, 0, 0);

   border13 = new LogV(850,206,0.3, 0, 0);

   border14 = new Log(1040,370,1, 0, 0);

   border15 = new LogV(930,460,1, 0, 0);

   border16 = new LogV(780,650,1, 0, 0);

   border17 = new LogV(930,580,0.6, 0, 0);

   border18 = new Log(875,760,1, 0, 0);

   border19 = new Log(1075,760,1, 0, 0);

   border20 = new Log(995,645,0.7, 0, 0);

   border21 = new LogV(1182,686,0.8, 0, 0);

   border22 =  new LogV(1055,600,0.4, 0, 0);

   border23  = new Log(669,555,1, 0, 0);

   border24 = new LogV(565,620,0.7, 0, 0);

   border25 = new LogV(470,345,1, 0, 0);

   border26 = new LogV(1185,595,0.3, 0, 0);

   border27 = new LogV(290,370,0.9, 0, 0);

   border28 = new Log(205,305,0.8, 0, 0);

   border29 = new LogV(470,170,1, 0, 0);

   border30 = new LogV(470,90,1, 0, 0);

   border31 = new Log(390,195,0.7, 0, 0);

   border32 = new Log(90,305,0.8, 0, 0);

   border33 = new LogV(19,200,1, 0, 0);

   border34 = new Log(105,195,0.8, 0, 0);

   border35 = new Log(170,195,0.8, 0, 0);

   border36 = new LogV(285,675,1, 0, 0);

   border37 = new LogV(565,705,0.7, 0, 0);

   border38 = new Log(460,766,1, 0, 0);

   border39 = new Log(395,766,1, 0, 0);

   border40 = new Log(730,375,0.4, 4, -4);

   border41 = new Log(348,515,0.3, 0, 0);

   border42 = new Log(837,706,0.3, 0, 0);
  
}


function draw() {
  background("pink");
  border1.display();
  border2.display();
  border3.display();
  border4.display();
  border5.display();
  border6.display();
  border7.display();
  border8.display();
  border9.display();
  border10.display();
  border11.display();
  border12.display();
  border13.display();
  border14.display();
  border15.display();
  border16.display();
  border17.display();
  border18.display();
  border19.display();
  border20.display();
  border21.display();
  border22.display();
  border23.display();
  border24.display();
  border25.display();
  border26.display();
  border27.display();
  border28.display();
  border29.display();
  border30.display();
  border31.display();
  border32.display();
  border33.display();
  border34.display();
  border35.display();
  border36.display();
  border37.display();
  border38.display();
  border39.display();
  border40.display();
  border41.display();
  border42.display();
  

  if(keyDown(UP_ARROW)){
  girl.velocityX = 0;
  girl.velocityY = -9 ;
  }

  if(keyDown(DOWN_ARROW)){
    girl.velocityX = 0 ;
    girl.velocityY = 9 ;
  }

  if(keyDown(LEFT_ARROW)){
   girl.velocityX = -9 ; 
   girl.velocityY = 0 ;
  }

  if(keyDown(RIGHT_ARROW)){
    girl.velocityX = 9 ;
    girl.velocityY = 0 ;
  }
 
   


  text(mouseX + ":" + mouseY , 30,320);
  
  drawSprites();
 
}





