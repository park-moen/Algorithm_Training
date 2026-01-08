/**
 * @param {string[]} wallpaper
 */
function solution(wallpaper) {
  const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;

  let [minRow, minCol, maxRow, maxCol] = [
    MAX_SAFE_INTEGER,
    MAX_SAFE_INTEGER,
    MIN_SAFE_INTEGER,
    MIN_SAFE_INTEGER,
  ];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === '#') {
        minRow = Math.min(minRow, i);
        minCol = Math.min(minCol, j);
        maxRow = Math.max(maxRow, i);
        maxCol = Math.max(maxCol, j);
      }
    }
  }

  return [minRow, minCol, maxRow + 1, maxCol + 1];
}

const wallpaper = [
  '..........',
  '.....#....',
  '......##..',
  '...##.....',
  '....#.....',
];
