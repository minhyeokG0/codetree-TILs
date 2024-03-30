const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('.')

const [y,m,d] = [Number(input[0]), Number(input[1]), Number(input[2])]


console.log(`${m}-${d}-${y}`)