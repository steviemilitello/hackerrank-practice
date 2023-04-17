'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0
    let negative = 0
    let zero = 0
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // find if positive, negative, or zero
        // add to either positive, negative or zero count
        if (arr[i] > 0) {
            positive += 1
        } else if (arr[i] < 0) {
            negative += 1
        } else {
            zero += 1
        }    
    }  
    // print (console.log) the values
    let pos = positive / arr.length
    let neg = negative / arr.length
    let zer = zero / arr.length
    
    console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}