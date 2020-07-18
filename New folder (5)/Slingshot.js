class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 50
        }
        
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.pointB = null;
    }

    display(){

        if(this.sling.pointB){


            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(2)
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
    }
    
}