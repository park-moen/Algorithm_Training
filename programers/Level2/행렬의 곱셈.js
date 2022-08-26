function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      answer[i].push(sum);
    }
  }

  return answer;
}

const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];

const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

solution1(arr1, arr2);
