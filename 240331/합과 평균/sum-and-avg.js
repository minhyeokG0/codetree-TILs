const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [a,b] = [Number(input[0]), Number(input[1])]


console.log(a+b, ((a+b)/2).toFixed(1))