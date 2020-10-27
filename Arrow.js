class Arrow{
constructor(x,y,angle){
    var options = {
        density: 1.2,
        friction:1
    }
    
    this.body = Bodies.rectangle(x,y,85,20,options);
    this.x = x;
    this.y = y;
    Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);
    
    this.image = loadImage("images/ARROW.png");
}
display(){
    var angle = this.body.angle;
    push();
    //problem with translate
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,85,20);
    pop();

}

}
