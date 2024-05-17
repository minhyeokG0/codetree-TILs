const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const [n, m] = [Number(input[0]), Number(input[1])]


let str=''
for(let i = 0; i < n; i++){
    str = ''
    for(let j = 0; j < m; j++){
        str += '* '
    }

    console.log(str)
}