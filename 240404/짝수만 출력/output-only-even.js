const fs = require('fs')


const n = fs.readFileSync(0).toString().trim().split(' ')


let [a, b] = [Number(n[0]), Number(n[1])]


let result = ''


while ( a <= b ){
    result += a + ' '
    a += 2
}


console.log(result)