class ComputerPlayer{
    constructor(x,y,width,height){
        var options3 ={
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,width,height,options3);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
    }

    display4(){
        var pos4 = this.body.position;
        var angle4 = this.body.angle;

        push();
        translate(pos4.x, pos4.y);
        rotate(angle4);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}