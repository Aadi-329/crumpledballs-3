class dustbin{
    constructor(x,y,width,height){
    this.rightbody=Bodies.rectangle(750,600,10,150,{isStatic:true});
    this.leftbody=Bodies.rectangle(550,600,10,150,{isStatic:true});
    this.bottombody=Bodies.rectangle(650,660,200,10,{isStatic:true});
 
    this.image=loadImage("dustbingreen.png")
    this.width=width
    this.height=height
    World.add(world,this.leftbody);
    World.add(world,this.rightbody);
    World.add(world,this.bottombody);

    
    
    }
    display(){
    var pos=this.bottombody.position
    
    imageMode(CENTER);
    image(this.image,pos.x,pos.y-75,200,150);
    }
    
    } 