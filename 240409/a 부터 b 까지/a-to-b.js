const fs = require('fs')

const input = fs.readFileSync(0).toString().split(' ')


const [a, b] = [Number(input[0]), Number(input[1])]

let result = ''
while(a <= b){
    result += a + ' '
    if( a % 2 === 1){
        a *= 2
    } else {
        a += 3
    }
}


console.log(result)