/**
 * * @see https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const pair = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  for (const bracket of s) {
    if (bracket === ')' || bracket === ']' || bracket === '}') {
      if (stack.pop() !== pair.get(bracket)) {
        return false;
      }
    } else {
      stack.push(bracket);
    }
  }

  console.log('stack', stack);

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

const s1 = '()[]{}';
const s2 = '(]';
const s3 = '([])';
const s4 = '(]';

isValid(s4);
