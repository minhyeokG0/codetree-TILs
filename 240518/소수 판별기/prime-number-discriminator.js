const fs = require('fs')


const input = Number(fs.readFileSync(0).toString().trim())

let satisfied = true;

for(let i = 2; i <= input-1; i++){
    if(input % i === 0){
        satisfied = false
    }
}

if( satisfied === true){
    console.log('P')
} else {
    console.log('C')
}