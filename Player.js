class Player{
    constructor(x,y,width,height){
        var options2 ={
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,width,height,options2);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
    }

    display3(){
        var pos3 = this.body.position;
        var angle3 = this.body.angle;

        push();
        translate(pos3.x, pos3.y);
        rotate(angle3);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}