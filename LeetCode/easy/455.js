/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let childIdx = 0;
  let cookieIdx = 0;
  let count = 0;

  while (childIdx < g.length && cookieIdx < s.length) {
    if (s[cookieIdx] >= g[childIdx]) {
      count++;
      childIdx++;
    }
    cookieIdx++;
  }

  return count;
};

const g = [10, 9, 8, 7];
const s = [5, 6, 7, 8];

console.log(findContentChildren(g, s));
