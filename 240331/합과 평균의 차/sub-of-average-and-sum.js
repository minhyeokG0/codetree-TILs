const fs = require('fs');


const input = fs.readFileSync(0).toString().trim().split(' ');


const [a,b,c] = [Number(input[0]), Number(input[1]), Number(input[2])];

const sum = a+b+c;
const average = (a+b+c)/3


console.log(sum)
console.log(average)
console.log(sum -average)