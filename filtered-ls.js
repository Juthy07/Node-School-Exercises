//Filtered LS
//Program that prints a list of files in a given directory, filtered by the extension of the files. 
//Provided a directory name as the first argument to the program  and a file extension to filter by as the second argument.
//The list of files should be printed to the console, one file per line. Must use asynchronous I/O.

"use strict"
const fs = require('fs');
const path = require('path');
//Path module provides a way of working with directories and file paths. 

const folder =  process.argv[2];
const ext = '.' + process.argv[3];


fs.readdir(folder, function (err, files) {
    if(err)  return console.error(err);
         files.forEach(function(file) {
             if(path.extname(file)===ext) {
                 console.log(file);
             }
         })
}) 

