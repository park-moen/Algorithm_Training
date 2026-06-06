/**
 * * @see https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (nums, target) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(target - nums[i])) {
      return [hash.get(target - nums[i]), i];
    } else {
      hash.set(nums[i], i);
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum2(nums, target);
