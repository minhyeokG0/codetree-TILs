const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')


const n = Number(input[0])



for(let i = 1; i <= n; i++){
    if(Number(input[i]) % 2 === 1 && Number(input[i]) % 3 === 0 ){
        console.log(Number(input[i]))
    }


}