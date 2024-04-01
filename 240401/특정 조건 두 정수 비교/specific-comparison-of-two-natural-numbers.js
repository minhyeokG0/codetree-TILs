const fs = require('fs');


const input = fs.readFileSync(0).toString().trim().split(' ');


const [a, b] = [Number(input[0]), Number(input[1])];

let answer1 = 0
let answer2 = 0

if(a < b){
    answer1 = 1
}


if(a === b) {
    answer2 = 1
} 

console.log(answer1,answer2)