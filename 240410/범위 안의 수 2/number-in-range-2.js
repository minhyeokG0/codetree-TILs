const fs= require('fs')


const input = fs.readFileSync(0).toString().trim().split('\n')



let sum = 0;
let cnt = 0;

for( let i = 0; i < input.length; i++){
    if(Number(input[i]) >= 0 && Number(input[i]) <= 200){
        sum += Number(input[i])
        cnt += 1
    }
}


console.log(sum, (sum/cnt).toFixed(1))