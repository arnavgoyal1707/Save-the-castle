class Archer{
    constructor(x, y, width, height) {
        var options = {
          isStatic: true

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("tarzan.png")
      
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, -10, 220, this.width, this.height);
        pop();
      }
  }