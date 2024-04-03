const fs = require('fs')


const input = fs.readFileSync(0).toString().trim().split(' ')


const [a, b, c] = [Number(input[0]), Number(input[1]), Number(input[2])]


if ((a > b && b > c)  || (c > b && b > a)){
    console.log(b)
} else if ((b > a && a > c) || (c > a && a > b)){
    console.log(a)
} else {
    console.log(c)
}