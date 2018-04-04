function accum(s) {
  // 分割成一個個字串 => split('')
  // 跑for迴圈
  //  根據index位置(i+1)則repeat(i次)
  // 每個字串加入join('-')
  let result = [];
  let arr = s.toLowerCase().split("");
  console.log(result); // [ 'z', 'p', 'g', 'l', 'n', 'r', 'x', 'q', 'e', 'n', 'u' ]
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      // 要判斷字串的位置
      if (j === 0) {
          str +=arr[i].toUpperCase()
      }else{
          str+=arr[i]
      }
    }
    result.push(str)
  }
  console.log(result);
  return result.join("-");
}

console.log(accum("ZpglnRxqenU"));