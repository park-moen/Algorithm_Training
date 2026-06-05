/**
 * * @see https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return result;
      }
    }

    result += strs[0][i];
  }

  return result;
};
