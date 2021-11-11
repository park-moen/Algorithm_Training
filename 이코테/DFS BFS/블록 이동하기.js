function solution(board) {
  const N = board.length;
  const goal = N + '' + N;
  const queue = [[[1, 1], [1, 2], 0]];
  const visit = new Set(['1112']);

  const new_board = new Array(N + 2).fill().map(_ => new Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  while (queue.length) {
    const [left, right, count] = queue.shift();

    if (left.join('') === goal || right.join('') === goal) return count;

    const nextPosition = getNextPosition(left, right, new_board);
    for (const next of nextPosition) {
      const [next_left, next_right] = next;
      const key = next_left.join('') + next_right.join('');
      if (!visit.has(key)) {
        queue.push([next_left, next_right, count + 1]);
        visit.add(key);
      }
    }
  }
}

const getNextPosition = (left, right, board) => {
  const result = [];
  const X = 1,
    Y = 0;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const move of moves) {
    const [dy, dx] = move;
    const next_left = [left[Y] + dy, left[X] + dx];
    const next_right = [right[Y] + dy, right[X] + dx];

    if (
      board[next_left[Y]][next_left[X]] === 0 &&
      board[next_right[Y]][next_right[X]] === 0
    ) {
      result.push([next_left, next_right]);
    }
  }

  const toward = [-1, 1];

  if (left[Y] === right[Y]) {
    for (const dy of toward) {
      if (
        board[left[Y] + dy][left[X]] === 0 &&
        board[right[Y] + dy][right[X]] === 0
      ) {
        result.push([left, [left[Y] + dy, left[X]]]);
        result.push([[right[Y] + dy, right[X]], right]);
      }
    }
  } else {
    for (const dx of toward) {
      if (
        board[left[Y]][left[X] + dx] === 0 &&
        board[right[Y]][right[X] + dx] === 0
      ) {
        result.push([[left[Y], left[X] + dx], left]);
        result.push([right, [right[Y], right[X] + dx]]);
      }
    }
  }

  return result;
};

const board = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];

console.log(solution(board));
