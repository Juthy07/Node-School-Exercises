'use strict'

const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if(err) {
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file)=== '.'+ ext;
        })
    
    callback(null, list)
    //A callback is a function called at the completion of a given task; 
    //this prevents any blocking, and allows other code to be run in the meantime.
    });
};

//The module is a variable that represents the current module, 
//and exports is an object that will be exposed as a module. 
//So, whatever you assign to module.exports will be exposed as a module.
//REFERENCE : https://www.tutorialsteacher.com/nodejs/nodejs-module-exports