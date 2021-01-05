class string{
    constructor(bodyA,bodyB)
    {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:10
        }
        this.string= Constraint.create(options)
        World.add(world,this.string)

    }
    display(){
    strokeWeight(6);
line(this.string.bodyA.position.x,this.string.bodyA.position.y,this.string.bodyB.position.x,this.string.bodyB.position.y)


    }
}