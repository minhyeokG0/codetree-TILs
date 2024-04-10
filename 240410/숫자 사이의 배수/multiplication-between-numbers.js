const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')


const [a, b] = [Number(input[0]), Number(input[1])]

let cnt = 0;
let sum = 0;


for( let i = a; i<= b; i++){
    if( i % 5 ===0 || i % 7 ===0){
        sum += i;
        cnt += 1
    }
}


console.log(sum, (sum/cnt).toFixed(1))