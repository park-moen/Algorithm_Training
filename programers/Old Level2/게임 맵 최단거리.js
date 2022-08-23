function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [[0, 0]];
  const n = maps.length; // 행
  const m = maps[0].length; // 열

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}

// const arr = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 1],
// ];

const arr = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

// const arr = [[1]];

// const arr = [[1], [1], [1], [1], [1]];

console.log(solution(arr));
