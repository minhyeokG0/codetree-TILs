const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [a,b] = [Number(input[0]), Number(input[1])]

if(a %2 === 0){
    console.log('even')
} else {
    console.log('odd')
}



if(b %2 === 0){
    console.log('even')
} else {
    console.log('odd')
}