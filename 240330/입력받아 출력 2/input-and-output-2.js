const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('-')

const [first, last] = [input[0], input[1]]


console.log(first+last)