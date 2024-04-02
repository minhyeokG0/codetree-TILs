const fs = require('fs')

const y = Number(fs.readFileSync(0).toString().trim())

console.log(y %4 === 0 || !(y % 100 === 0 && y % 400 !==0) ? 'true' : 'false')