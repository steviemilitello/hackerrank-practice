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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // sum of lowest four and highest four
    // since there are only 5 values, we can subtract the min and max value from total sum
    // set baselines
    let max = arr[0] 
    let min = arr[0]
    let sum = 0
    // iterate through the array, calculate the sum
    for (let i = 0; i < arr.length; i++) {
        // if our current max is less than our current number
        // then we want our max to equal that number
        if (max < arr[i]) {
            max = arr[i]
        }
        if ( min > arr[i]) {
            min = arr[i]
        }
        // find sum, sum += whatever value we are currently at
        sum += arr[i]
    }
    // if we subtract the lowest number, we have the 4 highest
    let maxSum = sum - min
    // if we subtract the highest number, we have the 4 lowest
    let minSum = sum - max
    console.log(minSum + " " + maxSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
