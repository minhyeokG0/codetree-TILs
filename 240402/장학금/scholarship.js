const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [first, second] = [Number(input[0]), Number(input[1])]

if( first < 90 || second < 90) {
    console.log(0)
} else if (second >= 95) {
    console.log(100000)
} else {
    console.log(50000)
}