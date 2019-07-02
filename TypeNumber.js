
//Prime number less than 100
let lessthan = new Array(99);

for(let i=2 ; i <= lessthan.length-1; i++){
    if((i % 2 === 0) || (i % 3 === 0))
    continue;
    console.log(i + ",")
}

// // Even Number, Odd, Prime

let startNumber = 0;
let endNumber = 1001;
let number = [];
while(startNumber <= endNumber ){
    number.push( startNumber++)
}
console.log(number)

//100 Number
for(let x = 0; x <= 100; x++){
    if (x === 0){
        console.log(x + "Even Number")
    }
    else if (x % 2 === 0 ){
        console.log(x + "Even Number")
    }
    else if(x % 3 === 0){
        console.log(x + "Prime Number/Odd Number")
    }else {
        console.log(x + "Odd Number")
    }

}

