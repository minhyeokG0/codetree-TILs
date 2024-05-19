const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())


let str = ''


for(let i = n;  i > 0; i--){
    str = ''
    for(let j = 0; j < i; j++){
        for(let k = 0; k < i; k++){
             str += '*'
        }
        str += ' '
    }
    console.log(str)
}