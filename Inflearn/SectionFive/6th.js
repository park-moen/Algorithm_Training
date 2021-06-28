function solution(s) {
  let answer;
  const hash = new Map();

  for (let val of s) {
    if (hash.has(val)) hash.set(val, hash.get(val) + 1);
    else hash.set(val, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of hash) {
    console.log(key, val);
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
