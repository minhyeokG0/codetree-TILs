const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n')

const [gender, age] = [Number(input[0]), Number(input[1])]

if(gender === 0){
    if(age >= 19){
        console.log('MAN')
    } else {
        console.log('BOY')
    }
} else {
    if(age >= 19){
        console.log('WOMAN')
    } else {
        console.log('GIRL')
    }

}