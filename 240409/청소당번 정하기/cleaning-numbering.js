const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())


let classRoomCnt = 0
let hallwayCnt = 0
let toiletCnt = 0


for(let i = 1; i <= n; i++){
    if( i % 2 === 0 && i % 3 === 0 && i % 12 === 0){
        toiletCnt += 1

    } else if (i % 2 === 0 && i % 3 === 0 ){
        hallwayCnt += 1
    } else if (i % 3 === 0){
        hallwayCnt += 1
    } else if (i % 2 === 0){
        classRoomCnt += 1
    }
}


console.log(classRoomCnt, hallwayCnt, toiletCnt)