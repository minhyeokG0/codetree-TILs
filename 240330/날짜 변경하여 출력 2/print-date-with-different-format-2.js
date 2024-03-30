const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('-')

const [mm, dd, yyyy] = [input[0], input[1], input[2]]

console.log(`${yyyy}.${mm}.${dd}`)