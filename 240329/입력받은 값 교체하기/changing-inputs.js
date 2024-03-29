const fs = require('fs')


const input = fs.readFileSync(0).toString().split(' ')

const [a, b] = [Number(input[1]), Number(input[0])]


console.log(a,b)