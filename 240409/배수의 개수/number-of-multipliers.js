const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

let cntForThree = 0
let cntForFive = 0

for(let i = 0; i < input.length; i++){
    let x = Number(input[i])

    if(x % 3 === 0){
        cntForThree += 1
    }

    if (x % 5 === 0){
        cntForFive += 1
    }
}


console.log(cntForThree, cntForFive)