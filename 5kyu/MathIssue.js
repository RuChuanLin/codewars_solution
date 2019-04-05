/*
  Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
  
  Here is a list of functions, we need:
  
  Math.round()
  Math.ceil()
  Math.floor()
  @link:https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript
*/
Math.round = function (number) {
    n = number.toString().split('.');
    if (n.length > 1) {
        if (parseInt(n[1].substring(0, 1)) >= 5) {
            return parseInt(n[0]) + 1;
        }
    }
    return parseInt(n);
};

Math.ceil = function (number) {
    var n = number.toString().split('.');
    if (n.length > 1) {
        return parseInt(n[0]) + 1;
    }
    return parseInt(n);
};
Math.floor = function (number) {
    var n = number.toString().split('.');
    return parseInt(n[0]);
};

console.log(Math.round(0.4));
console.log(Math.round(0.5));

console.log(Math.ceil(0.4), 1);
console.log(Math.ceil(0.5), 1);

console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
console.log(Math.floor(0.5), 0, 'Math.floor(0.5)');