const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ');

let [a, b] = [Number(input[0]), Number(input[1])];


a += b;

b += a;

console.log(a, b);