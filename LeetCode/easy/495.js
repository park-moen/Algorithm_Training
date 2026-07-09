/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function (timeSeries, duration) {
  let total = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const gap = timeSeries[i + 1] - timeSeries[i];
    total += Math.min(gap, duration);
  }

  total += duration;

  return total;
};

const timeSeries = [1, 2];
const duration = 2;

console.log(findPoisonedDuration(timeSeries, duration));
