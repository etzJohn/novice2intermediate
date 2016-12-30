function count(nums) {
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i])
    }
}

count([1,2,3,4,5]);
count() // error
count(undefined); // error

/*
  es2009 solution - Manual Argument Check
  this works, but is highly verbose, and does not scale well if we
  we need to check more and more conditions
*/
function count(nums) {
    var nums = typeof nums !== 'undefined' ? nums : [];
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i])
    }
}
/*
  es2015 solution - Default Parameter Values
  Default values are now in the function signature,
  allowing for easily inferred and managable code
  if no arg is passed, nums is assigned a value of
  an empty array
*/
function count(nums = []) {
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i])
    }
}
