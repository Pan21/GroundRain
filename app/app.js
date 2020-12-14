class Circle {
    constructor(cx, cy, radius, color){
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 5;
    }

    update(){
        this.y = this.y + this.speed;
        fill(this.color)
        circle( this.x, this.y, this.radius)

    }
}

class Rect{
    constructor(rx, ry, rw, rh){
        this.x = rx;
        this.y = ry;
        this.w = rw;
        this.h = rh;

    }

    rupdate(){
        rect( 10, 250, 680, 100)

    }
}

var rcolor = 100;
var myRect = new Rect ( 100, 100, 100, 100, [100, 100, rcolor])

var myCircles = [];

myCircles[0] = new Circle (100, 10, 50, [166, 214, 222]);
myCircles[1] = new Circle (300, 10, 70, [166, 214, 222]);
myCircles[3] = new Circle (240, 10, 80, [166, 214, 222]);
myCircles[4] = new Circle (300, 10, 110, [166, 214, 222]);
myCircles[5] = new Circle (200, 10, 20, [166, 214, 222]);
myCircles[6] = new Circle (500, 10, 40, [166, 214, 222]);
console.log(myCircle);

function setup(){
    createCanvas(700,300);
}

function draw(){
    background(34, 32, 79);


    myCircles[0].update();
    myCircles[1].update();
    myCircles[3].update();
    myCircles[4].update();
    myCircles[5].update();
    myCircles[6].update();
    myRect.rupdate();



    

}