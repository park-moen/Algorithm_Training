/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill1 = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];

  if (originalColor === color) {
    return image;
  }

  const rows = image.length;
  const cols = image[0].length;
  const stack = [[sr, sc]];

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      continue;
    }
    if (image[r][c] !== originalColor) {
      continue;
    }

    image[r][c] = color;

    stack.push([r + 1, c]);
    stack.push([r - 1, c]);
    stack.push([r, c + 1]);
    stack.push([r, c - 1]);
  }

  return image;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill2 = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];

  if (originalColor === color) {
    return image;
  }

  const rows = image.length;
  const cols = image[0].length;
  const queue = [[sr, sc]];

  image[sr][sc] = color;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    const directions = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];

    for (const [nr, nc] of directions) {
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
        continue;
      }
      if (originalColor !== image[nr][nc]) {
        continue;
      }

      image[nr][nc] = color;
      queue.push([nr, nc]);
    }
  }

  return image;
};

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;
