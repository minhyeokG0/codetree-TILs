const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())

let str = ''
let cnt = 0

for(let i = 0; i < 2*n - 1; i++){
    str = ''
    for(let j = 0; j <= cnt; j++){
        str += '* '
    }
    console.log(str)

    if( i + 1 < n ){
        cnt++

    } else {
        cnt--
    }
}