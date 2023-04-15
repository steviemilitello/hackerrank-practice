'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // set baselines
    let aliceArr = a 
    let bobArr = b 
    let aliceTotal = 0 
    let bobTotal = 0 
    // iterate through either alice's array (a) or bob's (b)
    // either will work
    for (let i = 0; i < aliceArr.length; i++) {
        // if a is greater than b, alice gets a point
        if (aliceArr[i] > bobArr[i]) {
            aliceTotal++ 
        // if a is less than b, bob gets a point
        } else if (aliceArr[i] < bobArr[i]) {
            bobTotal++
        // otherwise, neither get a point, keep going
        } else {
            continue
        }
    }
    return [aliceTotal, bobTotal]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
