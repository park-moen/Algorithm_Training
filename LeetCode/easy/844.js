/**
 * * @see https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const process = str => {
    const stack = [];

    for (const char of str) {
      if (char === '#') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    return stack.join('');
  };

  return process(s) === process(t);
};

const s = 'ab#c';
const t = 'ad#c';

backspaceCompare(s, t);
