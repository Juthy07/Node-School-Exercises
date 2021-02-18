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
    //The fs.readdir() method is used to asynchronously read the contents of a given directory. 
    //The callback of this method returns an array of all the file names in the directory.
    if(err)  return console.error(err);
         files.forEach(function(file) {
             if(path.extname(file)===ext) {   //The path.extname() method returns the extension of a file path.
                 console.log(file);
             }
         })
}) 

