/*
CodeWar: 5kyu - Directions Reduction
Link: https://www.codewars.com/kata/directions-reduction/train/javascript
Example: 
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
*/
// const map = {
//   'NORTH': 'SOUTH',
//   'SOUTH': 'NORTH',
//   'WEST': 'EAST',
//   'EAST': 'WEST'
// };
// function dirReduc(arr) {
//   let changed = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === map[arr[i]]) {
//       console.log(i, arr[i]);
//       arr.splice(i, 2)
//       changed = true;
//     }
//   }
//   return changed ? dirReduc(arr) : arr
// }

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'
  };
  return plan.reduce(function (pre, dir) {
    console.log(`preValue: ${pre}, currentValue: ${dir}`);
    console.log(`pre.length: ${pre.length}`);
    if (pre[pre.length - 1] === opposite[dir])
      pre.pop();
    else
      pre.push(dir);
    return pre;
  }, []);
}

// dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST', 'EAST']);
// dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']);
