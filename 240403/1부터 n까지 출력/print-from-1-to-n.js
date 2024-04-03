const fs = require('fs')


const input = Number(fs.readFileSync(0).toString().trim())


let result = ''

for(let i = 1;  i<= input; i++){
    result += (i + ' ')
}

console.log(result)