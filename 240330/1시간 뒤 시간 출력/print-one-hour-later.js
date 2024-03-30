const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(':');

const [h,s] = [Number(input[0]), Number(input[1])]


console.log(`${h + 1}:${s}`)