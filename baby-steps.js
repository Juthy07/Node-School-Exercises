//Baby Steps 
//Accept one or more numbers in cmd-line argument and print sum of those numbers to the console.

var arr = process.argv.slice(2);
//process - a global object used to access command-line arguments 
//argv - an object of process which is an array containing complete cmd-line.
//slice() - is a string function of Node.js which is used to extract sub-string from a string.

var sum = arr.reduce(function(acc, curr) {
    return +acc + +curr;
});
//reduce - The reduce() method is used to apply a function to each element in the array to reduce the array to a single value. It is an alternative for for loop.
//acc and curr - represents accumulator and current value.
//During each iteration the current value(curr) is added to the accumulator(acc).
//As the arr(array values) are in string it is required to be converted into numbers using Number() or simply adding '+' as prefix to the variable (+acc , +curr).

console.log(sum);
