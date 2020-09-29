class LogV{
    constructor(x,y,scale , velocityX , velocityY ){
        
        
        this.x = x ;
        this.y = y ; 
        this.velocityX = velocityX ; 
        this.velocityY = velocityY ;
        this.image = loadImage("images/wood1.png");
        this.scale = scale ; 
    
    }   
    display(){  
    var log = createSprite(this.x , this.y , this.velocityX , this.velocityY);
    log.addImage("block" , this.image);
    log.scale = this.scale ; 
    }
    }