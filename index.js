const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map(v => +v);
const board = [];

function findPickChickenPos(chickenPos, limit) {
  const combination = [];
  const pick = [];

  function findPick(pick) {
    if (pick.length === limit) {
      const res = [];

      for (const idx of pick) {
        res.push(chickenPos[idx]);
      }

      combination.push(res);
    } else {
      const startPoint = pick.length ? pick[pick.length - 1] + 1 : 0;

      for (let i = startPoint; i < chickenPos.length; i++) {
        pick.push(i);
        findPick(pick);
        pick.pop();
      }
    }
  }

  findPick(pick);
  return combination;
}

function sol(input, n, m) {
  const housePos = [];
  const chickenPos = [];
  const board = [];

  let result = [];

  for (let i = 0; i < n; i++) {
    board.push(input[i].split(' ').map(v => +v));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        housePos.push([i + 1, j + 1]);
      }

      if (board[i][j] === 2) {
        chickenPos.push([i + 1, j + 1]);
      }
    }
  }

  const possibleChickenPos = findPickChickenPos(chickenPos, m);

  // let temp = 0;

  // for (let i = 0; i < housePos.length; i++) {
  //   let minDistance = Number.MAX_SAFE_INTEGER;

  //   for (let j = 0; j < possibleChickenPos[7].length; j++) {
  //     const totalDistance =
  //       Math.abs(housePos[i][0] - chickenPos[j][0]) +
  //       Math.abs(housePos[i][1] - chickenPos[j][1]);

  //     if (minDistance > totalDistance) {
  //       minDistance = totalDistance;
  //     }
  //   }

  //   temp += minDistance;
  // }

  // console.log(temp);

  possibleChickenPos.forEach(location => {
    let temp = 0;

    for (let i = 0; i < housePos.length; i++) {
      let minDistance = Number.MAX_SAFE_INTEGER;

      for (let j = 0; j < location.length; j++) {
        const totalDistance =
          Math.abs(housePos[i][0] - chickenPos[j][0]) +
          Math.abs(housePos[i][1] - chickenPos[j][1]);

        if (minDistance > totalDistance) {
          minDistance = totalDistance;
        }
      }

      temp += minDistance;
    }

    console.log(temp);

    result.push(temp);
  });

  console.log(result);
}

sol(input, n, m);
