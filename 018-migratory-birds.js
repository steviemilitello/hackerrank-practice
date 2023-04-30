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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    // baselines
    let max = 0
    let max_id = 6
    // create a new array 
    let newArray = new Array(6).fill(0)
    for (const i of arr) {
        newArray[i]++
        // if the frequency is greater than the max, the max id is the number
        if (newArray[i] > max) {
            max = newArray[i]
            max_id = i
        // if the frequency is equal to the max and is less than the number, then the max id is the number
        } else if (newArray[i] === max && i < max_id) {
            max_id = i  
        }
        
    }
    return max_id
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}