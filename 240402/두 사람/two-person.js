const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const [A, B] = [input[0].split(' '), input[1].split(' ')]

const [ageA, sexA ] = [Number(A[0]), A[1]]
const [ageB, sexB] = [Number(B[0]), B[1]]

if((ageA >= 19 && sexA === 'M') || (ageB >= 19 && sexB === 'M')) {
 console.log(1)
}