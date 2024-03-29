const fs = require('fs')

const input = fs.readFileSync(0).toString().split('\n')


const [a,b,c] = [Number(input[0]), Number(input[1]) , Number(input[2])]


console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))