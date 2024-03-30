const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')


const [a, b] = [Number(input[0]), Number(input[1])]


console.log(a+87)

console.log(b%10)