const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0;
let index = 0;
while ( cnt < 3) {
    let n = Number(input[index]);
    if (n % 2 === 0) {
        console.log(parseInt(n / 2));
        cnt++;
    }
    index++;
}