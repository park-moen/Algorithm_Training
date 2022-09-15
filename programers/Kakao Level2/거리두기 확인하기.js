function bfs(place) {
  const roomDistance = [...place].map(rooms => rooms.split(''));
  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (roomDistance[i][j] === 'P') {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (roomDistance[nx][ny] === 'X') continue;
      if (roomDistance[nx][ny] === 'P') return 0;

      for (let j = 0; j < 4; j++) {
        const nextNX = nx + dx[j];
        const nextNY = ny + dy[j];

        if (nextNX < 0 || nextNX >= 5 || nextNY < 0 || nextNY >= 5) continue;
        if (nextNX === x && nextNY === y) continue;
        if (roomDistance[nextNX][nextNY] === 'P') return 0;
      }
    }
  }

  return 1;
}

function solution(places) {
  const answer = [];

  for (let i = 0; i < places.length; i++) {
    answer.push(bfs(places[i]));
  }

  return answer;
}

const places = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

solution(places);
