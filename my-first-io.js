//My First I/O
//Program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console.
//In synchronous file I/O, a thread starts an I/O operation and immediately enters a wait state until the I/O request has completed.

"use strict"
//"use strict" - Defines that JavaScript code should be executed in "strict mode". eg - undefined variables cannot be used in strict mode.

const fs = require('fs');
//require() method is used to include file system modules from Node core library.
//Common uses of fs (File System) include - Read, Write, Update, Delete, Rename files.

const contents = fs.readFileSync(process.argv[2], 'utf8'); //utf8 = toString()
//fs.readFileSync() method is an inbuilt application programming interface of fs module which is used to read the file and return its content.
//(tells node.js to block the other parallel process and do the current file reading process.)

const lines = contents.split('\n').length - 1; 
console.log(lines);
