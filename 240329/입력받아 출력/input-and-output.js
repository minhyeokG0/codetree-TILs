const fs = require('fs');


const input = fs.readFileSync(0).toString().split('\n');

const [a,b] = [Number(input[0]), Number(input[1])];


console.log(a,b)