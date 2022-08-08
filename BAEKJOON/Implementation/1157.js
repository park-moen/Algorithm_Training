// 1번 방법
const fs = require('fs');
const input1 = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .toLowerCase()
  .split('');
const alphabet = input1.filter((el, idx) => input1.indexOf(el) === idx);
const count = Array.from({ length: alphabet.length }).fill(0);

for (let i = 0; i < input1.length; i++) {
  count[alphabet.indexOf(input1[i])]++;
}

let max = count[0];

for (let i = 1; i < count.length; i++) {
  if (max < count[i]) {
    max = count[i];
  }
}

if (count.filter(el => el === max).length > 1) {
  console.log('?');
} else {
  console.log(alphabet[count.indexOf(max)].toUpperCase());
}

// 2번 방법
const input2 = fs.readFileSync('input.txt').toString().trim().toLowerCase();

const alphabetObj = {};

for (let i = 0; i < input2.length; i++) {
  if (alphabetObj[input2[i]] === undefined) {
    alphabetObj[input2[i]] = 1;
  } else {
    alphabetObj[input2[i]]++;
  }
}

const maxCount = Math.max(...Object.values(alphabetObj));
const duplicateMaxCount = Object.values(alphabetObj).filter(el => el === maxCount);

if (duplicateMaxCount.length > 1) {
  console.log('?');
} else {
  const result = Object.entries(alphabetObj)
    .sort((a, b) => b[1] - a[1])[0][0]
    .toUpperCase();

  console.log(result);
}
