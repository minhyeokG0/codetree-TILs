const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b] = [Number(input[0]), Number(input[1])]


console.log(a+b)
console.log(a-b)
console.log(parseInt(a/b))
console.log(a%b)