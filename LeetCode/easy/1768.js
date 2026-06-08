/**
 * * @see https://leetcode.com/problems/merge-strings-alternately/
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  let i = 0;
  let j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i++];
    }

    if (j < word2.length) {
      result += word2[j++];
    }
  }

  return result;
};

const word1 = 'abc';
const word2 = 'pqr';

mergeAlternately(word1, word2);
