const fs = require('fs')


const input = Number(fs.readFileSync(0).toString().trim())

let list = ''

for(let i = 1; i <= input; i++){
    if(i % 2 === 0 || i % 10 === 5|| (i % 3 === 0 && i % 9 !== 0)){
        continue
    }

    list += i + ' '


}

console.log(list)