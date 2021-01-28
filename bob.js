class Bob
{
constructor(x,y)
{
    var options = {
        'isStatic' : false,
        'restitution': 0.4,
        'friction' :0.5,
        'density': 1.2,
    }
 this.body= Bodies.circle(x,y,40,options)
 this.x = x;
 this.y = y;
 this.r = 40;
 World.add(world,this.body);
}
display(){
    var pos = this.body.position
    //var angle = this.body.angle
  
    //translate(pos.x,pos.y)
    //rotate(angle)
    rectMode(CENTER);
    fill("blue")
    ellipse(pos.x,pos.y,this.r*2,this.r*2)
    
}
}