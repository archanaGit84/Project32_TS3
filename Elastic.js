class Elastic {
    constructor(body1, point2){
        var options = {bodyA: body1,
        pointB: point2,
        length: 8,
        stiffness: 0.05,
        damping: 0}

        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);
    }

    fly(){
        this.elastic.bodyA = null;
    }

    attach(p){
       this.elastic.bodyA = p;
    }

    display(){
        if(this.elastic.bodyA){
            push();
            strokeWeight(4);
            stroke("red");
            line(this.elastic.bodyA.position.x,this.elastic.bodyA.position.y, this.elastic.pointB.x, this.elastic.pointB.y);
            pop();
        }
        
    }

}