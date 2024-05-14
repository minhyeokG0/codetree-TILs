const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())

let cnt = 0;
let prod = n
for (let i = 1; i <= n; i++){
    prod = parseInt(prod /i)
    cnt += 1
    if(prod <= 1){
        console.log(cnt)
        break
    }
}