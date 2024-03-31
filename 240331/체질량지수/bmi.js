const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ');

const [h, w] = [Number(input[0]), Number(input[1])]


const b = parseInt((10000*w)/(h*h))

console.log(b)

if(b >= 25) console.log('Obesity')