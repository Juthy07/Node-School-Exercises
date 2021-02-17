//My First Async I/O
//Program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console.

"use strict"
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, function (err, contents) { 
//fs.readFile() method is used to read a file in a non-blocking asynchronous way.
//contents - Buffer arguments

    if (err) {    //for any errors
       return console.log(err);
    }

    const line = contents.toString().split('\n').length - 1;   //callbacks as string
    console.log(line);
})
