/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {}
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (map[target-n] >= 0) {
      return [map[target-n], i];
    } else {
      map[n] = i;
    }
  }
};

let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums, target))
