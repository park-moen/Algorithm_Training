/**
 * * @see https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const hash = new Map();

  for (const char of s) {
    hash.set(char, (hash.get(char) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

const s = 'leetcode';

firstUniqChar(s);
