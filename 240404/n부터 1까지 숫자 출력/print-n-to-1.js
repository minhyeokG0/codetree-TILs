const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())


let result = ''
let i = n;


while( i >=  1){
    result += i + ' '
    i--
}


console.log(result)