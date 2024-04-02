const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')


const [a, b, c] = [Number(input[0]), Number(input[1]), Number(input[2])]


if(a <= b && a <= c){
    console.log(a)
} else if ( b <= a && b <= c) {
    console.log(b)
} else if (c <= a && c <= b) {
    console.log(c)
}