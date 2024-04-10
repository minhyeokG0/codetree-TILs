const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())

let  sum = 0
for(let i = 1; i<= n-1; i++){
    if( n % i === 0){
        sum += i
    }

    if(i === n-1){
        if( sum === n){
            console.log('P')
        } else {
            console.log('N')
        }
    }
}