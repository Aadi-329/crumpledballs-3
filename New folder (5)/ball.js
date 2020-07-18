class Ball{
constructor(x,y){
    this.image=loadImage("paper.png")
var options={
isStatic:false,
'restitution':0.3,
'friction':0.5,
'density':200


}
    this.body=Bodies.circle(x,y,10,options)
    World.add(world,this.body)


}
display(){
 var pos=this.body.position
 imageMode(CENTER);
//circle(pos.x,pos.y,20);
image(this.image,pos.x,pos.y,25,25);
//fill("brown");

}


}