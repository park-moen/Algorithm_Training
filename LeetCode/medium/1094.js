/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function (trips, capacity) {
  const changes = new Array(1001).fill(0);

  for (const [numPassengers, from, to] of trips) {
    changes[from] += numPassengers;
    changes[to] -= numPassengers;
  }

  let current = 0;
  for (const change of changes) {
    current += change;
    if (current > capacity) {
      return false;
    }
  }

  return true;
};

const trips = [
  [2, 1, 5],
  [3, 3, 7],
];
const capacity = 4;

carPooling(trips, capacity);
