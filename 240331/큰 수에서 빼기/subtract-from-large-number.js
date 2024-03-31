const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b] = [Number(input[0]), Number(input[1])]

if(a >= b) console.log(a-b);

if(a < b) console.log(b -a);