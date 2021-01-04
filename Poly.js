class Poly {
    constructor(x,y){
        this.radius = 15;
        this.sides = 6;
        var options = {restitution: 0.5, density:0.009}

        this.body = Bodies.polygon(x,y,this.sides,this.radius, options);
        console.log(this.body);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);


    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0,0,30,30);

        pop();
    }
}