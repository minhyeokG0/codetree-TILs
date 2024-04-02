const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split("\n")

const [first, second, third] = [input[0].split(' '), input[1].split(' '), input[2].split(' ')]

const [firstIsSick, firstTemp] = [first[0], Number(first[1])]
const [secondIsSick, secondTemp] = [second[0], Number(second[1])]
const [thirdIsSick, thirdTemp] = [third[0], Number(third[1])]


if(firstIsSick === 'Y' && firstTemp >= 37){
    if(secondIsSick === 'Y' && secondTemp >= 37){
        console.log('E')
    } else {
        if(thirdIsSick === 'Y' && thirdTemp >= 37){
             console.log('E')
        } else {
            console.log('N')
        }
    }

} else {
    if(secondIsSick === 'Y' && secondTemp >= 37) {
       if(thirdIsSick === 'Y' && thirdTemp >= 37){
             console.log('E')
        } else {
            console.log('N')
        }
    } else {
         console.log('N')
    }

}