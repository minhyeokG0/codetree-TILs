const fs = require('fs')


let n = Number(fs.readFileSync(0).toString().trim())


let cnt = 0

while(true){
    if(n === 1){
        console.log(cnt)
        break
    }
    n /= 2
    cnt++
    

}