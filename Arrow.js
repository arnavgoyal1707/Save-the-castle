class Arrow{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x
        this.y=y
        this.image=loadImage("38-385733_archery-arrow-bow-medieval-weapon-archery-cartoon-bow.png")
      
        World.add(world, this.body);
      }
      display(){
        // arrow.body.position.x=mouseX
        // arrow.body.position.y=mouseY
        // console.log(arrow.body.position.x+", "+arrow.body.position.y)
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      




      
  }