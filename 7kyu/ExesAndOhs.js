/*
CodwWar 7 Kyu: Exes and Ohs
Link: https://www.codewars.com/kata/exes-and-ohs/train/javascript

# Example
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


// Solution 1
// function XO(str){
//   str = str.toLowerCase();
//   // console.log(str.split('x').length);
//   // console.log(str.split('o').length);
//   return str.split('x').length === str.split('o').length ? true : false
// }
// Solution 2
function XO(str) {
  let o = str.match(/o/gi);
  let x = str.match(/x/gi);
  return (o && o.length) === (x && x.length) ? true : false
}

XO('xo');
XO('xooxx');
XO('zpzpzpp');