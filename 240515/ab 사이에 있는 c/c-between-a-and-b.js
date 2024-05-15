const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')

const [a,b,c] = [Number(input[0]), Number(input[1]), Number(input[2])]



let pass = false
for(let i = a; i <= b; i++){
    if( i % c === 0){
        pass = true
    }

    if ( pass === true){
        console.log('YES')
        break
    }

    if( i === c && pass === false){
        console.log('NO')
        break
    }
}