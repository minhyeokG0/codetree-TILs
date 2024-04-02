const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')

const [scoreA, scoreB] = [input[0].split(' '), input[1].split(' ')]

const [mathA, engA] = [Number(scoreA[0]), Number(scoreA[1])]
const [mathB, engB] = [Number(scoreB[0]), Number(scoreB[1])]


console.log(mathA > mathB && engA > engB ? 1 : 0)