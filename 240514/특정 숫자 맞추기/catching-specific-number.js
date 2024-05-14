const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')

let index = 0;
while(true){
    if(Number(input[index]) > 25){
        console.log('Lower')
    } else if (Number(input[index]) < 25){
        console.log('Higher')
    } else if (Number(input[index]) === 25){
        console.log('Good')
        break
    }
    index++
}