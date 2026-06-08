/**
 * *@see https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = new Map();

  for (const num of nums) {
    hash.set(num, (hash.get(num) ?? 0) + 1);
  }

  let maxCount = 0;
  let result = 0;

  for (const [key, value] of hash.entries()) {
    if (maxCount < value) {
      maxCount = value;
      result = key;
    }
  }

  return result;
};

const nums = [3, 2, 3];
majorityElement(nums);
