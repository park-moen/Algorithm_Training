function solution(rows, columns, queries) {
  const answer = [];
  let count = 1;

  const rangeArray = Array.from(Array(rows), () => Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      rangeArray[i][j] = count++;
    }
  }

  while (queries.length) {
    const [x1, y1, x2, y2] = queries.shift();
    const endPoint = rangeArray[x1 - 1][y1 - 1];
    let minValue = rangeArray[x1 - 1][y1 - 1];

    for (let i = x1 - 1; i < x2 - 1; i++) {
      minValue = Math.min(minValue, rangeArray[i][y1 - 1]);
      rangeArray[i][y1 - 1] = rangeArray[i + 1][y1 - 1];
    }

    for (let j = y1 - 1; j < y2 - 1; j++) {
      minValue = Math.min(minValue, rangeArray[x2 - 1][j]);
      rangeArray[x2 - 1][j] = rangeArray[x2 - 1][j + 1];
    }

    for (let k = x2 - 1; k > x1 - 1; k--) {
      minValue = Math.min(minValue, rangeArray[k][y2 - 1]);
      rangeArray[k][y2 - 1] = rangeArray[k - 1][y2 - 1];
    }

    for (let l = y2 - 1; l > y1 - 1; l--) {
      minValue = Math.min(minValue, rangeArray[x1 - 1][l]);
      rangeArray[x1 - 1][l] = rangeArray[x1 - 1][l - 1];
    }

    rangeArray[x1 - 1][y1] = endPoint;

    answer.push(minValue);
  }

  return answer;
}

const rows1 = 6;
const columns1 = 6;
const queries1 = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

const rows2 = 3;
const columns2 = 3;
const queries2 = [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
];

const rows3 = 100;
const columns3 = 97;
const queries3 = [[1, 1, 100, 97]];

solution(rows3, columns3, queries3);
