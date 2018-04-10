function josephus(items, k) {
  let index = k - 1;
  const step = k - 1;
  const result = [];
  while (items.length) {
    if (index >= items.length) {
      index %= items.length;
    }
    result.push(items.splice(index, 1)[0]);
    index += step;
  }
  return result;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
