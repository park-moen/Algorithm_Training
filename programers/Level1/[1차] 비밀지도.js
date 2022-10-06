function solution(n, arr1, arr2) {
  var answer = [];

  const firstDecoding = arr1.map(v => v.toString(2));
  const lastDecoding = arr2.map(v => v.toString(2));

  for (let i = 0; i < n; i++) {
    if (firstDecoding[i].length !== n) {
      const addZeroCount = n - firstDecoding[i].length;
      firstDecoding[i] = '0'.repeat(addZeroCount) + firstDecoding[i];
    }

    if (lastDecoding[i].length !== n) {
      const addZeroCount = n - lastDecoding[i].length;
      lastDecoding[i] = '0'.repeat(addZeroCount) + lastDecoding[i];
    }
  }

  for (let i = 0; i < n; i++) {
    let hashInfo = '';
    for (let j = 0; j < n; j++) {
      if (firstDecoding[i][j] === '1' || lastDecoding[i][j] === '1') {
        hashInfo += '#';
      } else {
        hashInfo += ' ';
      }
    }

    answer.push(hashInfo);
  }

  return answer;
}

function solution2(n, arr1, arr2) {
  const answer = [];
  const firstDecoding = arr1.map(v => v.toString(2).padStart(n, 0));
  const lastDecoding = arr2.map(v => v.toString(2).padStart(n, 0));

  for (let i = 0; i < n; i++) {
    let hashInfo = '';
    for (let j = 0; j < n; j++) {
      if (firstDecoding[i][j] === '1' || lastDecoding[i][j] === '1') {
        hashInfo += '#';
      } else {
        hashInfo += ' ';
      }
    }

    answer.push(hashInfo);
  }

  return answer;
}

const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
const n = 5;

solution(n, arr1, arr2);
solution2(n, arr1, arr2);
