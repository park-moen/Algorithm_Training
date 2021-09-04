// const fs = require('fs');
// const [n, m, ...temp] = fs.readFileSync('input.txt').toString().trim().split(/\s+/);
// const arr = temp.map(el => +el);

// function sumOfTree(tree, mid) {
//   let sum = 0;

//   for (let val of tree) {
//     if (val > mid) sum += val - mid;
//   }

//   return sum;
// }

// function solution(tree, m) {
//   let answer = 0;
//   tree = tree.sort((a, b) => a - b);

//   let lt = 0;
//   let rt = tree[tree.length - 1];

//   while (lt <= rt) {
//     const mid = parseInt((lt + rt) / 2);
//     const treeHeight = sumOfTree(tree, mid);
//     console.log(treeHeight);

//     if (treeHeight === m) {
//       answer = mid;
//       break;
//     } else if (treeHeight > m) {
//       lt = mid + 1;
//     } else {
//       rt = mid - 1;
//     }
//   }

//   console.log(answer);
// }

// solution(arr, Number(m));

const fs = require('fs');
const [n, m, ...temp] = fs.readFileSync('input.txt').toString().trim().split(/\s+/);
const arr = temp.map(el => +el);

function sumOfTree(tree, mid) {
  let sum = 0;

  for (let val of tree) {
    if (val > mid) sum += val - mid;
  }

  return sum;
}

function solution(tree, m) {
  let answer = 0;
  tree = tree.sort((a, b) => a - b);

  let lt = 1;
  let rt = tree[tree.length - 1];

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);

    if (sumOfTree(tree, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
}

solution(arr, Number(m));
