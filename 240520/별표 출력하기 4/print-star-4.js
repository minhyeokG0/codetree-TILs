const fs = require('fs')


const  n = Number(fs.readFileSync(0).toString().trim())


let str = ''
let cnt = 1

for(let i = 1; i <= 2*n-1; i++){
    str = ''
    for(let j  = n; j >= cnt; j--){
        str += '* '
    }

    console.log(str)

    if( i >= n){
        cnt--
    } else {
        cnt++
    }
}