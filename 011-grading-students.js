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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    // we need to make an array called results
    let result = []
    for (let i = 0; i < grades.length; i++) {
        // if the grade is 38 is lower, the grade stays the same
        if(grades[i] < 38) {
            result.push(grades[i])
        // cases for numbers over 38
        } else {
            // if the grade + 1 equals the multiple of 5 we round up
            if((grades[i] + 1) % 5 == 0) {
                result.push(grades[i] + 1)
            // if the grade + 2 equals the multiple of 5 we also round up
            } else if ((grades[i] + 2) % 5 == 0) {
                result.push(grades[i] + 2)
            // else the grade remains the same
            } else {
                result.push(grades[i])
            }
        }
    }
    return result
}