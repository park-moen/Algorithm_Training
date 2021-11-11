const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const board = [];
const teacherSpace = [];
const emptySpace = [];

for (let i = 0; i < n; i++) {
  board.push(input.slice(1)[i].split(' '));

  for (let j = 0; j < n; j++) {
    if (board[i][j] === 'X') emptySpace.push([i, j]);
    if (board[i][j] === 'T') teacherSpace.push([i, j]);
  }
}

function watch(x, y, direction, copyBoard) {
  if (direction === 0) {
    while (y >= 0) {
      if (copyBoard[x][y] === 'S') return true;
      if (copyBoard[x][y] === 'O') return false;
      y--;
    }
  }

  if (direction === 1) {
    while (y < n) {
      if (copyBoard[x][y] === 'S') return true;
      if (copyBoard[x][y] === 'O') return false;
      y++;
    }
  }

  if (direction === 2) {
    while (x >= 0) {
      if (copyBoard[x][y] === 'S') return true;
      if (copyBoard[x][y] === 'O') return false;
      x--;
    }
  }

  if (direction === 3) {
    while (x < n) {
      if (copyBoard[x][y] === 'S') return true;
      if (copyBoard[x][y] === 'O') return false;
      x++;
    }
  }

  return false;
}

function check(copyBoard) {
  for (let [x, y] of teacherSpace) {
    for (let i = 0; i < 4; i++) {
      if (watch(x, y, i, copyBoard)) return true;
    }
  }

  return false;
}

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

const fillWallPos = findCombination(emptySpace, 3);

let flag = false;

for (let walls of fillWallPos) {
  const temp = board.map(v => [...v]);

  for (let [x, y] of walls) {
    temp[x][y] = 'O';
  }

  if (!check(temp)) {
    flag = true;
    break;
  }
}

if (flag) {
  console.log('YES');
} else {
  console.log('NO');
}
