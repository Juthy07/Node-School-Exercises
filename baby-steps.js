 var arr = process.argv.slice(2);
var sum = arr.reduce(function(acc, curr) {
    return +acc + +curr;
});
console.log(sum);