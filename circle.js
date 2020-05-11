class Circle {
    constructor(x, y, radius) {
      var options = {
        'restitution':0.5,
        'friction':0.6,
        'density':0.75
      }
      this.body = Bodies.rectangle(x, y, radius, options);
      this.width = radius;
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }
    display(){
      console.log(this.body)
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle)
      ellipseMode(CENTER);
      fill(255);
      ellipse(this.x, this.y, this.width);
      pop();
    }
  };
  