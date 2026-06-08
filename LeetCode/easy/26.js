/**
 * * @see https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let writeIdx = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[writeIdx - 1]) {
      nums[writeIdx] = nums[i];
      writeIdx++;
    }
  }

  return writeIdx;
};

const nums = [1, 1, 2];

removeDuplicates(nums);
