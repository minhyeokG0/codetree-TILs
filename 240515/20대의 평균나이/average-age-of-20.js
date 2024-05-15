const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')


let index = 0
let count = 0
let sum = 0

while(true){
    
    n = Number(input[index])
     if(n >= 30){
        console.log((sum/count).toFixed(2))
        break

    }
    sum += n
    count +=1
    index+=1    

}