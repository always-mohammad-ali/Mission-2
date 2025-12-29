abstract class Area{
    abstract getArea() : number;
}

class CircleArea extends Area{
    radius : number;
    constructor(radius : number){
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

}

class RectangleArea extends Area{
    height : number;
    width : number;

    constructor(height : number, width : number){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const circleArea = new CircleArea(5);
const rectangleArea = new RectangleArea(10, 5);

console.log(circleArea.getArea());
console.log(rectangleArea.getArea());