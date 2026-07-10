/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      if (Math.abs(hash.get(nums[i]) - i) <= k) {
        return true;
      }
    }

    hash.set(nums[i], i);
  }

  return false;
};

const nums = [1, 2, 3, 1];
const k = 3;

const nums2 = [1, 2, 3, 1, 2, 3];
const k2 = 2;

console.log(containsNearbyDuplicate(nums, k));
console.log(containsNearbyDuplicate(nums2, k2));
