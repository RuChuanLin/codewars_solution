// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.
// If that value has two digits, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

// digital_root(942)
// => 9 + 4 + 2 => 15 => 1 + 5 => 6

function digital_root(n) {
  let total = 0;
  let digital = n.toString().split("");
  // 將942分割為[9,4,2]

  // 如果是二位數，將執行while裡的程式
  while (digital.length > 1) {
    // Array[9,4,2], Array[1,5]
    //判斷是否為二位數
    total = digital.reduce((a, b) => {
      return a + b;
    });
    digital = total
      .toString()
      .split("")
      .map(str => {
        return parseInt(str);
      });
  }
  return total;
}
console.log(digital_root(16));
console.log(digital_root(942));
