const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('-')

const [first, second, third] = [input[0], Number(input[1]), Number(input[2])]


console.log(`${first}-${third}-${second}`)