const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(v => +v);
const board = [];

for (let i = 0; i < n; i++) {
  board.push(input[i + 1].split(' ').map(v => +v));
}

function combinationArr(arr, limit) {
  console.log(arr.length, arr);
  const comb = [];
  const pick = [];

  function findPick(pick) {
    console.log(pick);
    if (pick.length === limit) {
      const res = [];

      for (let idx of pick) {
        res.push(arr[idx]);
      }

      comb.push(res);
    } else {
      const sp = pick.length ? pick[pick.length - 1] + 1 : 0;

      for (let i = sp; i < arr.length; i++) {
        pick.push(i);
        findPick(pick);
        pick.pop();
      }
    }
  }

  findPick(pick);
  return comb;
}

function solution(n, m, board) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const virusPos = [];
  const zeroPos = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 2) virusPos.push([i, j]);
      if (board[i][j] === 0) zeroPos.push([i, j]);
    }
  }

  const possibleWallPos = combinationArr(zeroPos, 3);

  possibleWallPos.forEach(walls => {
    const copyBoard = board.map(v => [...v]);
    const queue = virusPos.map(v => [...v]);

    for (let [x, y] of walls) {
      copyBoard[x][y] = 1;
    }

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && copyBoard[nx][ny] === 0) {
          copyBoard[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }

    const safeAreaCnt = copyBoard.reduce(
      (acc, cur) => acc + cur.filter(v => v === 0).length,
      0
    );

    answer = Math.max(answer, safeAreaCnt);
  });

  return answer;
}

console.log(solution(n, m, board));
