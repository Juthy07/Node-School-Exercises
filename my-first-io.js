"use strict"
const fs = require('fs');
const contents = fs.readFileSync(process.argv[2], 'utf8'); //utf8 = toString()
const lines = contents.split('\n').length - 1; 
console.log(lines);