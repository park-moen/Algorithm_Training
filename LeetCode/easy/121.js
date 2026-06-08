/**
 * * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else {
      if (max < prices[i] - min) {
        max = prices[i] - min;
      }
    }
  }

  return max;
};

const prices = [7, 1, 5, 3, 6, 4];

maxProfit(prices);
