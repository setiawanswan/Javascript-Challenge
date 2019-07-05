// This is unnamed class
let rectangle = class{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

console.log(rectangle.name)

//This is call named class
let shape = class shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

console.log(shape.name)

class triangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calculationArea()
    }

    calculationArea(){
        return this.height * this.width;
    }
}
const value = new triangle(10, 10)
console.log(value.area)

class animal {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
