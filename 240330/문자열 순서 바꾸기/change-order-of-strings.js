const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split("\n");

let [s, t] = [input[0], input[1]];

[t, s] = [s, t];


console.log(s);

console.log(t);