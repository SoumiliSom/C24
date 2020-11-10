class pig{
    constructor(x,y){
        var options={restitution:0.6};
        this.object =Bodies.rectangle(x,y,30,30,options);
        this.width=30;
        this.height=30;
         World.add(world,this.object);  
    }
    
    display(){
        var pos=this.object.position;
        var angle=this.object.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green"); 
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); 
    }
    
    
    
    
    }