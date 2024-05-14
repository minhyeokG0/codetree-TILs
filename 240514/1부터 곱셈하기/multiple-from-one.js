const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())

let prod = 1;
let num;

for (let i = 1; i <=10; i++){
    prod *= i
    if(prod >= n){
        num = i;
        break
    }
}

console.log(num)