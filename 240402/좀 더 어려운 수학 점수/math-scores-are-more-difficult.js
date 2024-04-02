const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const [arrA, arrB] = [input[0].split(' '), input[1].split(' ')]

const [mathA, engA] = [Number(arrA[0]), Number(arrA[1])]
const [mathB, engB] = [Number(arrB[0]), Number(arrB[1])]

if(mathA >mathB) {
    console.log('A')
} else {
    console.log('B')
}

if( mathA === mathB && engA > engB) {
    console.log('A')
} else if ( mathA === mathB && engA < engB) {
 console.log('B')
}