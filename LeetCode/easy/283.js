/**
 * * @see https://leetcode.com/problems/move-zeroes/description/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  for (let i = writeIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);
