const fs = require('fs')


const n = Number(fs.readFileSync(0).toString().trim())



let i = 2
while(true){
    if(n % i === 0){
        console.log('C')
        break
    } else {
        if(i === n-1){
            console.log('N')
            break
        }
        i++
        
    }

}