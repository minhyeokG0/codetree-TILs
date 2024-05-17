const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [a, b] = [Number(input[0]), Number(input[1])]

let pass = false
for(let i = a; i <= b; i++){
    if(1920 % i === 0 && 2880 % i === 0){
        pass = true
    }

}


if(pass === true){
    console.log(1)
}else {
    console.log(0)
}