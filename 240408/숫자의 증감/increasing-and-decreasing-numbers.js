const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [c, n] = [input[0], Number(input[1])]

let result =''


if( c === 'A'){
    for(let i = 1; i <= n; i++){
        result += i + ' '
    }
} else {
    for(let i = n;  i >= 1; i--){
        result += i + ' '
    }
}


console.log(result)