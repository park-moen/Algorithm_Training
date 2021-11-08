var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split('\n');

function findCombination(arr, m) {
  const comb = [];
  const pick = [];
  const used = Array.from({ length: arr.length }, () => 0);

  function findPart(pick) {
    if (pick.length === m) {
      const res = [];

      for (let idx of pick) {
        res.push(arr[idx]);
      }

      comb.push(res);
      return;
    } else {
      let sp = pick.length ? pick[pick.length - 1] + 1 : 0;

      for (let i = sp; i < arr.length; i++) {
        pick.push(i);
        used[i] = 1;
        findPart(pick);
        pick.pop();
        used[i] = 0;
      }
    }
  }

  findPart(pick);

  return comb;
}

function solution(N, M, board) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const virusPos = [];
  const zeroPos = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) zeroPos.push([i, j]);
      if (board[i][j] === 2) virusPos.push([i, j]);
    }
  }

  const possibleWallPos = findCombination(zeroPos, 3);

  possibleWallPos.forEach(walls => {
    const temp = board.map(v => [...v]);

    for (let [x, y] of walls) {
      temp[x][y] = 1;
    }

    const queue = virusPos.map(v => [...v]);

    while (queue.length) {
      const [vi, vj] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nvi = vi + dx[k];
        let nvj = vj + dy[k];

        if (nvi >= 0 && nvj >= 0 && nvi < N && nvj < M && temp[nvi][nvj] === 0) {
          temp[nvi][nvj] = 2;
          queue.push([nvi, nvj]);
        }
      }
    }

    const safeAreaCnt = temp.reduce(
      (acc, cur) => acc + cur.filter(v => v === 0).length,
      0
    );

    answer = Math.max(answer, safeAreaCnt);
  });

  return answer;
}

const [N, M] = input[0].split(' ').map(v => Number(v));
const board = input.slice(1).map(v => v.split(' ').map(v => Number(v)));

console.log(solution(N, M, board));
