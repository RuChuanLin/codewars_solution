// How many arguments
// link:https://www.codewars.com/kata/how-many-arguments/train/javascript

// Create a function called args_count that returns the number of arguments provided
function args_count () {
    return arguments.length
}

Test.assertEquals(args_count(1, 2), 2);
Test.assertEquals(args_count(), 0);
Test.assertEquals(args_count('A', 'B', 'C'), 3);
Test.assertEquals(args_count(["foo", "bar"]), 1);