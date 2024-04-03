const fs = require('fs')

const input = Number(fs.readFileSync(0).toString().trim())

let result = ''

for(let n = input; n<=100; n++){
 result += (n + ' ')
}

console.log(result)