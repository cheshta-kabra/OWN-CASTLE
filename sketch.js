const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3,box4,box5,box6,box7;
var circle1,circle2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(80,300,10,200);
    box2= new Box(320,350,10,200);
    box3 = new Box(120,300,50,150);
    box4= new Box(280,350,50,150);
    box5=new Box(200,200,80,250);
    box6 = new Box(50,300,10,230);
    box7= new Box(350,350,10,230);

    circle1= new Circle(320,180,35);
    circle2= new Circle(80,190,35);

    ground= new Ground(380,380,800,5);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    circle1.display();
    circle2.display();

    ground.display()
}