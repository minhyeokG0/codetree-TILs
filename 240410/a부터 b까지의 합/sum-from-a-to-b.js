const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ');

const [a, b] = [Number(input[0]), Number(input[1])];


let sumVal = 0;

for(let i =a; a <= b; i++){
    sumVal += i
}


console.log(sumVal)