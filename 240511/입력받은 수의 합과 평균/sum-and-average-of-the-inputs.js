const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')


const n = Number(input[0])

let sum = 0;

for(let i = 1; i <= n; i++){
    sum += Number(input[i])

}

console.log(sum, (sum/n).toFixed(1))