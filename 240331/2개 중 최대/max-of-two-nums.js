const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')


const [a, b] = [Number(input[0]), Number(input[1])]


const answer = a >= b ? a : b

console.log(answer)