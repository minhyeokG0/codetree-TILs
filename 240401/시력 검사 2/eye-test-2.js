const fs = require('fs')


const input = Number(fs.readFileSync(0).toString().trim())


if(input >=1.0){
    console.log('High')
} else if (input >= 0.5) {
    console.log('Middle')
} else {
    console.log('Low')
}