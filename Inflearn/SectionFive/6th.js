function solution(s) {
  let answer;
  const sH = new Map();

  for (let value of s) {
    if (!sH.has(value)) sH.set(value, 1);
    else sH.set(value, sH.get(value) + 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
