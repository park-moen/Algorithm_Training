/**
 * * @see https://leetcode.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const result = [];
  const seen = new Set(nums1);

  for (const num of new Set(nums2)) {
    if (seen.has(num)) {
      result.push(num);
    }
  }

  return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

intersection(nums1, nums2);
