const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [b, a] = [Number(input[0]), Number(input[1])]

let result = ''

for( let i = b; i >= a;  i -= 2){
    result += i + ' '
}


console.log(result)