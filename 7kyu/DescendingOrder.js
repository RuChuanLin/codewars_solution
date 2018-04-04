// Your task is to make a function that can take any non-negative integer as a argument
// and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

function descendingOrder(n) {
    let result = parseInt(n.toString().split('').sort().reverse().join(''))
    console.log(result)
    return result
}

descendingOrder(21445);
descendingOrder(145263);
descendingOrder(1254859723);
// n 數字，要轉換成字串才可以做以下功能
// 轉換字串 toString()
// 分割陣列 split('')
// 排列 sort()
// 倒轉
// 結合陣列join
