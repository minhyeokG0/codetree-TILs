const fs = require('fs')

const input = Number(fs.readFileSync(0).toString().trim())

console.log((input % 2 === 1  &&  input % 3 === 0) || (input % 2 === 0 && input % 5 === 0))