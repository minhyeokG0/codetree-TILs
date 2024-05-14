const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())

let sum = 0
let num = 0
for (let i = 1; i <= n; i++){
    sum += i
    if( sum >= n){
        num = i
        break
    }

}

console.log(num)