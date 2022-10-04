function solutio1(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, () => [...arr1[0]]);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}

function solution2(arr1, arr2) {
  const answer = arr1.map((a, i) => a.map((v, j) => v + arr2[i][j]));

  return answer;
}

const arr1 = [
  [1, 2],
  [2, 3],
];

const arr2 = [
  [3, 4],
  [5, 6],
];

solution1(arr1, arr2);
solution2(arr1, arr2);
