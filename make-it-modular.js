 'use strict'
 let worker = require('./mymodule');
 let callback = function(err, list) {
     if(err) {
         return console.error(err);
     }
     list.forEach(function(file) {
         console.log(file);
     });
 }
 worker(process.argv[2], process.argv[3], callback);