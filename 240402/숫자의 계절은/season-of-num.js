const fs = require('fs')

const m = Number(fs.readFileSync(0).toString().trim())

if( 3 <= m &&  m <= 5){
    console.log('Spring')
} else if (6 <= m && m <= 8) {
    console.log('Summer')
} else if (9 <= m && m <= 11) {
    console.log('Fall')
} else {
    console.log('Winter')
}