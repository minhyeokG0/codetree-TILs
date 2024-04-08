const fs = require('fs')


const input = fs.readFileSync(0).toString().split(' ')


const [a, b] = [Number(input[0]), Number(input[1])]


let result = ''
let rest = ''


for (let i =1; i <= 21; i++){
    if( i === 1){
        result += parseInt(a/b) + '.'
        rest = (a % b) * 10
    } else {
        result += parseInt(rest/b)
        rest =  (rest % b) * 10
    }
}


console.log(result)