function solution(board) {
  let answer = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const len = board.length;

  function DFS(x, y) {
    board[x][y] = 0;

    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < len && ny >= 0 && ny < len && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        DFS(i, j);
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
