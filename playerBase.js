class PlayerBase {
    constructor(x,y,width,height){
        var options1 = {
            isStatic : true
        };

        this.body = Bodies.rectangle(x,y,width,height,options1);
        this.width = width;
        this.height= height;
        this.image = loadImage("./assets/base1.png");

        World.add(world, this.body);
    }

    display2(){
        var pos1 = this.body.position;
        var angle1 = this.body.angle;

        push();
        translate(pos1.x, pos1.y);
        rotate(angle1);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}