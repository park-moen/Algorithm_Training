function solution(arr1, arr2) {
  const result = [[]];

  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result[i].push(arr1[i][j] + arr2[i][j]);
    }
  }

  return result;
}

function secondSolution(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(arr1, arr2));
console.log('secondSolution', secondSolution(arr1, arr2));
