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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    // baseline to check sea level
    let seaLevel = 0
    let mountain = 0
    let valley = 0
    // iterate through the path
    for (let i = 0; i < path.length; i++) {
        // if the index is u, it will go up and be a mountain
        if (path[i] == "U") {
            if(seaLevel == 0) {
                mountain++
            }
            // sea level increases with mountain level
            seaLevel++
        }
        // if index is d, then we are going into a valley
        if(path[i] == "D") {
            // if we are going down and sea level = 0 we are going to a valley
            if (seaLevel == 0) {
                valley++
            }
            seaLevel--
        }
    }
    return valley
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
