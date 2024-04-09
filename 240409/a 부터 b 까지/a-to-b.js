const fs = require('fs')

const input = fs.readFileSync(0).toString().split(' ')


const [a, b] = [Number(input[0]), Number(input[1])]

let result = a+ ' '
for(let i = a; i < b;){
    if( i % 2 === 1){
        result += (i*2) + ' '
        i *= 2
    } else {
        result += (i + 3) + ' '
        i += 3
    }
}

console.log(result)