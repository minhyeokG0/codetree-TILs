const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

let [weight, height] = [Number(input[0]), Number(input[1])]

weight += 8
height *= 3

console.log(weight)
console.log(height)

console.log(weight*height)