

function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    const n = array2.indexOf(Math.pow(array1[i], 2));
    if (n === -1) {
      return false;
    } else {
      array2.splice(n, 1);
    }
  }
  return array2.length === 0;
}
