class Log{
constructor(x,y,scale,velocityX,velocityY){
    
    this.scale = scale ;
    this.x = x ;
    this.y = y ; 
    this.image = loadImage("images/wood2.png");
    this.velocityX = velocityX ;
    this.velocityY = velocityY ;

}   
display(){  
var log = createSprite(this.x , this.y , this.velocityX , this.velocityY);
log.addImage("block" , this.image);
log.scale = this.scale ; 

}
}