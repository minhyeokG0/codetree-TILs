const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

let index = 0
while(true){
    n = input[index].split(' ')
    index++
    console.log(n[0]*n[1])

    if(n[2] === 'C'){
        break
    }
}