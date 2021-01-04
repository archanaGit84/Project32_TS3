class Box{
    constructor(x,y){
        var options = { restitution: 0.5,
                        friction: 0.5,
                        density: 0.0005
                     }

    this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    this.rcolor = random(0,255);
    this.gcolor = random(0,255);
    this.bcolor = random(0,255);
    this.visibility = 255;
    

    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.position.y < 430){
            push();
            translate(pos.x,pos.y);
            angleMode(RADIANS);
            rotate(angle);
            fill(this.rcolor,this.gcolor, this.bcolor);
            strokeWeight(2);
            stroke("black");
            rectMode(CENTER);
    
            rect(0, 0, this.width, this.height);
            pop();
        }

        else if(this.body.position.y > 430){
            push();
            
             World.remove(world,this.body);  
            this.visibility = this.visibility - 3;
            fill(this.rcolor,this.gcolor, this.bcolor, this.visibility);
            strokeWeight(2);
            stroke(0,0,0, this.visibility);
            rectMode(CENTER);
            rect(0, 0, this.width,this.height);

           
            
            
            
             
            pop();

        }
             
    }

    score(){
        if(this.visibility < 50 && this.visibility > -100){
            countScore += 1;
        }
        
    }
}