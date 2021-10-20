function getPureStr(str) {
  const arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    if (/^[A-Za-z]+$/.test(str[i] + str[i + 1])) {
      arr.push((str[i] + str[i + 1]).toUpperCase());
    }
  }
  return arr;
}

function solution(str1, str2) {
  const CONSTANT = 65536;
  const arr1 = getPureStr(str1);
  const arr2 = getPureStr(str2);

  const temp = arr1.slice();
  const union = arr1.slice();
  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    if (!temp.includes(arr2[i])) {
      union.push(arr2[i]);
    } else {
      intersection.push(arr2[i]);
      temp.splice(temp.indexOf(arr2[i]), 1);
    }
  }

  console.log(union, intersection);

  const min = intersection.length;
  const max = union.length;

  const similarity = max === min ? 1 : min / max;

  return parseInt(CONSTANT * similarity);
}

const str1 = 'FRANCE';
const str2 = 'french';
// 16384

// const str1 = 'handshake';
// const str2 = 'shake hands';
// 65536

// const str1 = 'aa1+aa2';
// const str2 = 'AAAA12';
// 43690

// const str1 = 'E=M*C^2';
// const str2 = 'e=m*c^2';
// 65536

console.log(solution(str1, str2));
