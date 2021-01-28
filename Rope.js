class Rope {
    constructor(body1,pointB){
       // this.offsetX = offsetX
       // this.offsetY = offsetY
        var options={
            bodyA: body1,
            pointB: pointB,
          //  pointB: {x: this.offsetX, y:this,offsetY},
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    
    
}