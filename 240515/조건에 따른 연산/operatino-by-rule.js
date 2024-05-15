const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim())

let count = 0

while(true){
    if(n >= 1000){
        console.log(count)
        break
    }
    if(n % 2 === 0){
        n = n*3 + 1
    } else {
        n = n*2 + 2
    }
    count++
}