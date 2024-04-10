const fs  = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')



let sum = 0;
for(let i = 1; i <= input.length; i++){
    if(Number(input[i]) % 2 === 1 && Number(input[i]) % 3 === 0){
        sum += Number(input[i])

    }
}


console.log(sum)