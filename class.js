// let rectangle = class{
//     constructor(height, width){
//         this.height = heigth;
//         this.width = width;
//     }
// };
// console.log(rectangle.name);

// let rectangle = class rectangle2{
//     constructor(heigth, width){
//         this.height = heigth;
//         this.width = width;

//     }
// };

// console.log(rectangle.name);

class triangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calculationArea();
    }
    calculationArea(){
        return this.height * this.width;
    }

}
const square = new triangle(10, 10);
console.log(square.area);

class animal {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
