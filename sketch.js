const Engine = Matter.Engine
 const World = Matter.World
  const Bodies = Matter.Bodies
  
   var engine,world,box1,box2,ground0,pig1,log1,log2,pig2,box3,box4,box5,log3,log4;

    function setup() { 
      createCanvas(400,400);

       engine = Engine.create(); 
       world = engine.world; 
       box1=new box(100,200,50,50); 
       box2=new box(300,200,50,50);
       ground0=new ground(200,300,400,20);
       pig1=new pig(200,200);
       log1=new log(200,170,300,PI/2);
       box3=new box(100,150,50,50); 
       box4=new box(300,150,50,50);
       pig2=new pig(200,150);
       log2=new log(200,100,300,PI/2);
       box5=new box(200,50,50,50);
       log3=new log(120,50,140,PI/4);
       log4=new log(250,50,140,-PI/4)
    }

    function draw() {

    background("black");

   Engine.update(engine);
   box1.display();
   box2.display();
   ground0.display(); 
   pig1.display();
   log1.display();
   pig2.display();
   log2.display();
   box3.display();
   box4.display();
   box5.display();
   log3.display();
   log4.display();
  
   }