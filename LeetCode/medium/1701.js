/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = function (customers) {
  let currentTime = 0;
  let totalWaiting = 0;

  for (const [arrival, time] of customers) {
    const start = Math.max(arrival, currentTime);
    const finish = start + time;
    totalWaiting += finish - arrival;
    currentTime = finish;
  }

  return totalWaiting / customers.length;
};

const customers = [
  [1, 2],
  [2, 5],
  [4, 3],
];

averageWaitingTime(customers);
