const fs = require('fs')


const input = fs.readFileSync(0).toString().split('\n')


const arr = input[0].split(' ')

const [a,b] = [Number(arr[0]), Number(arr[1])]

const c = Number(input[1])


console.log(a,b,c)