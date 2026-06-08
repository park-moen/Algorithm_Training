/**
 * * @see https://leetcode.com/problems/reverse-string/description/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString1 = function (s) {
  return s.reverse();
};

var reverseString2 = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];

    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
};

const s = ['h', 'e', 'l', 'l', 'o'];

reverseString1(s);
reverseString2(s);
