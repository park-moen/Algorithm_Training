const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(el => +el);
const arr = input[1].split(' ').map(el => +el);

let answer = -1;
let count = 0;

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      count++;
      if (count === k) answer = arr1[i];
      i++;
    } else {
      results.push(arr2[j]);
      count++;
      if (count === k) answer = arr2[j];
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    count++;
    if (count === k) answer = arr1[i];
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    count++;
    if (count === k) answer = arr2[j];
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort(arr);
console.log(answer);
