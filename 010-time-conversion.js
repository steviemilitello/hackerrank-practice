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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    // store am and pm
    let time = s.charAt(8)
    // store hour converted
    let hour = ""
    if (time == "A") {
        // 12 am -> convert to 00
        // give the characters from index 0 to index 1
        if (s.substring(0, 2) == "12") {
            time = "00"  
        // 1am - 11am -> we do nothing
        } else {
            time = s.substring(0, 2)   
        } 
        // 12 pm where we do nothing
    } else {
        if (s.substring(0, 2) == "12") {
            time = s.substring(0, 2) 
            // for 1pm to 11pm add 12
        } else {
            time = parseInt(s.substring(0, 2), 10) + 12
        }
    }
    // return without AM or PM
    return time + s.substring(2, 8)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}