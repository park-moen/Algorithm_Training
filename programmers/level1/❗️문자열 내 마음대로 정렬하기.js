function solution(strings, n) {
  return [...strings].sort((left, right) => {
    if (left[n] < right[n]) return -1;
    if (left[n] > right[n]) return 1;

    if (left < right) return -1;
    if (left > right) return 1;

    return 0;
  });
}

function secondeSolution(strings, n) {
  return [...strings].sort((left, right) => {
    if (left[n] === right[n]) {
      return left < right ? -1 : 1;
    }

    return left[n] < right ? -1 : 1;
  });
}

function thirdSolution(strings, n) {
  return [...strings].sort((left, right) =>
    left[n] === right[n]
      ? left.localeCompare(right)
      : left[n].localeCompare(right[n])
  );
}

const strings = ['sun', 'bed', 'car'];
const n = 1;

console.log(solution(strings, n));
console.log(secondeSolution(strings, n));
console.log(thirdSolution(strings, n));
