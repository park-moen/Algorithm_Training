/**
 * * @see https://leetcode.com/problems/valid-anagram/submissions/2023739583/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  [...s].forEach(value => {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }
  });

  [...t].forEach(value => {
    if (map.has(value)) {
      map.set(value, map.get(value) - 1);
    } else {
      return false;
    }
  });

  for (const count of map.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};

const s = 'anagram';
const t = 'nagaram';

isAnagram(s, t);
