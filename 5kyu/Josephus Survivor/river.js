function josephusSurvivor(n, k) {
  const baseArr = [...Array(n)].map((_, i) => i + 1);
  let index = k - 1;
  const step = k - 1;
  for (let i = 1; i < n; i++) {
    if (index >= baseArr.length) {
      while (index - baseArr.length >= 0) {
        index -= baseArr.length;
      }
    }
    baseArr.splice(index, 1);
    index += step;
  }
  return baseArr[0];
}

console.log(josephusSurvivor(14, 2));
