const fs = require('fs')


let input = Number(fs.readFileSync(0).toString().trim())

if(input % 2 === 0){
   input /= 2
}

if( input % 2 === 1){
    input /= 2;
    input += 1;
}

console.log(parseInt(input))