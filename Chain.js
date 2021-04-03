class Chain{
    constructor(body1,body2){
        var options={
            bodyA : body1,
            bodyB : body2,
            length : 10,
            stiffness: 0.05,
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var p2 = this.chain.bodyA.position
        var p1 = this.chain.bodyB.position
        line(p2.x,p2.y,p1.x,p1.y);
    }
}