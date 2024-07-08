const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

const hash = input.reduce((acc, cur) => {
  if (acc[cur]) {
    return { ...acc, [cur]: acc[cur] + 1 };
  } else {
    return { ...acc, [cur]: 1 };
  }
}, {});

switch (Object.keys(hash).length) {
  case 1:
    console.log(input[0] * 1000 + 10000);
    break;
  case 2:
    console.log(Object.entries(hash).find(v => v[1] === 2)[0] * 100 + 1000);
    break;
  default:
    console.log(Math.max(...input) * 100);
}

// reference: https://memostack.tistory.com/294

// input.sort((a, b) => b - a);

// const [A, B, C] = input; // [6, 3, 3]

// if (A !== B && A !== C && B !== C) {
//   console.log(A * 100);
// } else if (A === B && B !== C) {
//   console.log(A * 100 + 1000);
// } else if (B === C && C !== A) {
//   console.log(B * 100 + 1000);
// } else {
//   console.log(A * 1000 + 10000);
// }
