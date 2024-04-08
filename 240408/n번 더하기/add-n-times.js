const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')


let [a, n] = [Number(input[0]), Number(input[1])]


for(let i = 1; i <= n; i++){
    a += n
    console.log(a)
}