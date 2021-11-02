const fs = require('fs');
const [N, ...input] = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(N);
const rgb = input.map(dis => dis.split(' ').map(v => +v));

for (let i = 1; i < n; i++) {
  rgb[i][0] = rgb[i][0] + Math.min(rgb[i - 1][1], rgb[i - 1][2]);
  rgb[i][1] = rgb[i][1] + Math.min(rgb[i - 1][0], rgb[i - 1][2]);
  rgb[i][2] = rgb[i][2] + Math.min(rgb[i - 1][0], rgb[i - 1][1]);
}

let result = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < 3; i++) {
  result = Math.min(result, rgb[n - 1][i]);
}

console.log(result);
