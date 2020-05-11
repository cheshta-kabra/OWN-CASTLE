class Box {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.5,
        'friction':0.6,
          'density':0.75
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body)
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle)
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  