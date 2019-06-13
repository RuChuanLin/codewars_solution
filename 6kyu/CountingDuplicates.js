/* CodeWar
Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript
*/
function duplicateCount(text){
    let obj = {};
    let count = 0;
    let letters = text.toLowerCase().split('');
    letters.forEach(str => {
      if (!obj[str]) {
        obj[str] = 1
      } else {
        obj[str]++;
      }
    })
    
    for (let letter in obj) {
      if (obj[letter] > 1){
        count ++;
      }
    }
    return count;
  }

duplicateCount("abcde")
duplicateCount("aabbcde")
duplicateCount("Indivisibilities")