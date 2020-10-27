class Wall{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1,
            isStatic : true
        }
        this.wall = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.wall);
    }
    display(){
        fill("Black");
        rectMode(CENTER);
        rect(this.wall.position.x,this.wall.position.y, this.w, this.h);
        
    }
}