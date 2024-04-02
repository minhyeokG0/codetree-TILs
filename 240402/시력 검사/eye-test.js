const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')

const [left, right] = [Number(input[0]), Number(input[1])]


if( left >=1.0 && right >= 1.0) {
    console.log('High')
} else if (left >=0.5 && right >= 0.5) {
    console.log('Middle')
} else {
    console.log('Low')
}