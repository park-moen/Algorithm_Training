const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {number[]} array
 * @returns {number}
 */
function maxValue(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

/**
 *
 * @param {number[]} array
 * @returns {number}
 */

function minValue(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const list = input[1].split(" ").map(Number);

  const min = minValue(list);
  const max = maxValue(list);

  return `${min} ${max}`;
}

console.log(solution(input));

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution2(input) {
  const list = input[1].split(" ").map(Number);

  return `${Math.min(...list)} ${Math.max(...list)}`;
}

console.log(solution2(input));
