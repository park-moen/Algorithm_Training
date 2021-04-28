function solution(str1, str2) {
  let answer = 'YES';
  const sH = new Map();

  for (let value of str1) {
    if (!sH.has(value)) sH.set(value, 1);
    else sH.set(value, sH.get(value) + 1);
  }

  for (let value of str2) {
    if (!sH.has(value) || sH.get(value) === 0) return 'NO';

    sH.set(value, sH.get(value) - 1);
  }

  return answer;
}

let a = 'abaCC';
let b = 'Caaab';
console.log(solution(a, b));
