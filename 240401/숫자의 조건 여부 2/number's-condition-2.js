const fs = require('fs')


const input = Number(fs.readFileSync(0).toString().trim())


if( input === 5){
    console.log('A')
} else if(input %2 === 0){
    console.log('B')
}