/**
 *  * @see https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const seen = new Set();

  for (const value of nums) {
    if (seen.has(value)) {
      return true;
    }

    seen.add(value);
  }

  return false;
};

const nums = [1, 2, 3, 4];

console.log(containsDuplicate(nums));
