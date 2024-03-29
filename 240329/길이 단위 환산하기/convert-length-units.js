const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());


const ft = 30.48


console.log((input*ft).toFixed(1))