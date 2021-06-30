class Shoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
      this.string = loadImage('rectangle (1).png');

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    // attach(body){
    //     this.sling.bodyA = body;
    // }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
      
        if(this.sling.bodyA!=null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           
               
                line(pointA.x , pointA.y+30, pointB.x-5 , pointB.y-32);
                line(pointA.x, pointA.y+30, pointB.x - 10, pointB.y +30);
               // image(this.string,pointA.x, pointA.y +10,5,30);
            
            
           
            
            pop();
        }
    }

    // fly(){
    //     this.sling.bodyA=null


    // }
    
}