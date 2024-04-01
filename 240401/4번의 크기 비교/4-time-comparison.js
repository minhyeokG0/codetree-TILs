const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const restInput = input[1].split(' ')


const [a, b, c, d, e] = [Number(input[0]), Number(restInput[0]), Number(restInput[1]), Number(restInput[2]), Number(restInput[3])]


console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)