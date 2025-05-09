// 내가 푼 방식
function getPureStr(text) {
  const result = [];

  for (let i = 0; i < text.length - 1; i++) {
    if (/^[A-Za-z]+$/.test(text[i] + text[i + 1])) {
      result.push((text[i] + text[i + 1]).toUpperCase());
    }
  }
  return result;
}

function solution(str1, str2) {
  const arr1 = getPureStr(str1);
  const arr2 = getPureStr(str2);

  const union = arr1.slice();
  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      union.push(arr2[i]);
    } else {
      intersection.push(arr2[i]);
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  const min = intersection.length;
  const max = union.length;

  const similarity = max === min ? 1 : min / max;

  return parseInt(65536 * similarity);
}

// 다른 사람 풀이
function explode(text) {
  const result = [];

  for (let i = 0; i < text.length - 1; i++) {
    if (/^[A-Za-z]+$/.test(text[i] + text[i + 1])) {
      result.push((text[i] + text[i + 1]).toUpperCase());
    }
  }

  return result;
}

function solution2(str1, str2) {
  const arr1 = explode(str1);
  const arr2 = explode(str2);

  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  [...set].forEach(item => {
    const has1 = arr1.filter(v => v === item).length;
    const has2 = arr2.filter(v => v === item).length;

    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return parseInt((union === intersection ? 1 : intersection / union) * 65536);
}

// const str1 = 'FRANCE';
// const str2 = 'french';
// 16384

const str1 = 'handshake';
const str2 = 'shake hands';
// 65536

// const str1 = 'aa1+aa2';
// const str2 = 'AAAA12';
// 43690

// const str1 = 'E=M*C^2';
// const str2 = 'e=m*c^2';
// 65536

console.log(solution(str1, str2));
console.log(solution2(str1, str2));
