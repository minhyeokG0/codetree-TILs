const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b] = [Number(input[0]), Number(input[1])]
let result = ''
for(let i = b; i>= a; i--){
    result += i + ' '
}


console.log(result)