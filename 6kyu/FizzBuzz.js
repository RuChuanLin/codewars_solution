// Return an array
function fizzbuzz(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
        if (i % 15 === 0) {
            arr[i - 1] = 'FizzBuzz'
        }else if(i%5 === 0){
            arr[i-1] = 'Buzz'
        }else if(i%3===0){
            arr[i-1]='Fizz'
        }
    }
    return arr
}
console.log(fizzbuzz(30));