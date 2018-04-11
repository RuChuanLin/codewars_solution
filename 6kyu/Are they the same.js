// a or b might be [] (all languages except R, Shell). a or b might be nil or null or None (except in Haskell, Elixir, C++, Rust, R, Shell).
// If a or b are nil (or null or None), the problem doesn't make sense so return false.
// If a or b are empty the result is evident by itself.
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); // [ 11, 19, 19, 19, 121, 144, 144, 161 ]
  array2.sort((a, b) => a - b); // [121, 361, 361, 361, 14641, 20736, 20736, 25921]
  console.log(array1.map(i => i * i)); // [ 121, 361, 361, 361, 14641, 20736, 20736, 25921 ]
  return array1.map(i => i * i).every((x, i) => x == array2[i]);
  //  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361, 25921, 361, 20736, 361]
);
// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19
// ];
