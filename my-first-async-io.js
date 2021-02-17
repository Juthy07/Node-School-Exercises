"use strict"
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, function (err, contents) { //contents - Buffer arguments

    if (err) {    //for any errors
       return console.log(err);
    }

    const line = contents.toString().split('\n').length - 1;   //callbacks as string
    console.log(line);
})
