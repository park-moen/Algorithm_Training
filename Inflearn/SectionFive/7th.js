function solution(str1, str2) {
  let answer = 'YES';
  let hash = new Map();

  for (let val of str1) {
    if (hash.has(val)) hash.set(val, hash.get(val) + 1);
    else hash.set(val, 1);
  }

  for (let val of str2) {
    if (!hash.has(val) || hash.get(val) === 0) return 'NO';

    hash.set(val, hash.get(val) - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
