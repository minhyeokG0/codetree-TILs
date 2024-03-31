const fs = require('fs')

const score = Number(fs.readFileSync(0).toString().trim());


const answer = score === 100 ? 'pass' : 'failure'


console.log(answer)