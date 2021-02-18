 //Make It Modular
 // Create a program that prints a list of files in a given directory, filtered by the extension of the files.
 // The first argument is the directory name and the second argument is the extension filter.
 // Print the list of files (one file per line) to the console. You must use asynchronous I/O.
 
 'use strict'

 let mymodule = require('./mymodule');
 // must specify ./ as a path of root folder to import a local module.
 let dir = process.argv[2];
 let ext = process.argv[3];
 mymodule(dir, ext, function(err, list) {
     if(err) {
         return console.error(err);
     }
     list.forEach(function(file) {
         console.log(file);
     });
 });
