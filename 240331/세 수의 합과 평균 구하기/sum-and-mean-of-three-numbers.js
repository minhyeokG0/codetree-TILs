const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [a,b,c] = [Number(input[0]), Number(input[1]), Number(input[2])]


console.log(a+b+c)
console.log(parseInt((a+b+c)/3))