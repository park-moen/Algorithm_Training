const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(/\s+/);
const n = input[0];
const n_arr = input.slice(1, parseInt(n) + 1).map(el => Number(el));
const m_arr = input.slice(parseInt(n) + 2).map(el => Number(el));

function binaraySearch(arr, target_arr) {
  arr.sort((a, b) => a - b);

  for (let key of target_arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = parseInt((left + right) / 2);

      if (key === parseInt(arr[mid])) {
        console.log(1);
        break;
      } else if (key < parseInt(arr[mid])) right = mid - 1;
      else if (key > parseInt(arr[mid])) left = mid + 1;
    }

    if (left > right) console.log(0);
  }
}

binaraySearch(n_arr, m_arr);
