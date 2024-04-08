const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')


const [a, b] = [Number(input[0]), Number(input[1])]

let result = ''
if( Number.isInteger(a) && a > 0){
    for(let i = 1; i<=b; i ++){
        result += a+''
    }
} else {
    console.log(0)
}


console.log(result)