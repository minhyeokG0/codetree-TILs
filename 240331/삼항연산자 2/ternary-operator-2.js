const fs = require('fs')


const a = Number(fs.readFileSync(0).toString().trim())

const answer = a === 1 ? 't' : 'f'


console.log(answer)