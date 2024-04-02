const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b, c] = [Number(input[0]), Number(input[1]), Number(input[2])]

const answer1 = a <= b && a <= c ? 1 : 0
const answer2 = a === b && b === c ? 1 : 0


console.log(answer1, answer2)