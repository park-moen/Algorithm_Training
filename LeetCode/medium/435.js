/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let removeCount = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start < prevEnd) {
      removeCount++;
    } else {
      prevEnd = end;
    }
  }

  return removeCount;
};

const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
