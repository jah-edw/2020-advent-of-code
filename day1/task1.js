const fs = require('fs');

let contentString = fs.readFileSync("data.txt").toString();
let contentArr = contentString.split('\n').map((i) => Number(i));

function get2020(arr) {
    let final = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result = arr.find(element => 2020 - arr[i] === element && final.push(element));
    }
    if (final) return final[0] * final[1];
    else console.log("no options")
}


console.log(get2020(contentArr))