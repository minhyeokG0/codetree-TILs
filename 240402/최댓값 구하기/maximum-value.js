const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b, c] = [Number(input[0]), Number(input[1]), Number(input[2])]



if( a >= b) {
   if( a >= c ) {
    console.log(a)
   } else {
    console.log(c)
   }
} else {
    if( b>= c ){
        console.log(b)
    } else {
        console.log(c)
    }
}