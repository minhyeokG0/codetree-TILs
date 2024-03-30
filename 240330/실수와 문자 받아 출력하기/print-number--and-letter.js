const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')

const [c,a,b] = [input[0], Number(input[1]).toFixed(2), Number(input[2]).toFixed(2)]


console.log(c)
console.log(a)
console.log(b)