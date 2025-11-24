function solution(array, commands) {
  const result = [];
  for (const [i, j, k] of commands) {
    const element = [];

    for (let idx = i - 1; idx < j; idx++) {
      element.push(array[idx]);
    }

    result.push(element.sort((a, b) => a - b)[k - 1]);
  }

  return result;
}

function secondSolution(array, commands) {
  return commands.map(commend => {
    const [sPosition, ePosition, target] = commend;
    const element = array
      .filter((value, idx) => idx >= sPosition - 1 && idx <= ePosition - 1)
      .sort((a, b) => a - b);

    return element[target - 1];
  });
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
console.log(secondSolution(array, commands));
