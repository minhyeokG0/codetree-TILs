const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b ] = [Number(input[0]), Number(input[1])]


let result = ''

for(let i = a; i <= b; i += 2){
    result += i +' '
}


console.log(result)